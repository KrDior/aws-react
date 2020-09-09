import React, { forwardRef, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useDispatch, useSelector } from 'react-redux';
import handleOrderApi from '../store/middleware/getDataOrders';
import { RootState, IOrder, Item } from '../types/store';

const tableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};

interface Row {
  id: string,
  firstName: string,
  lastName: string,
  totalPrice: number,
  orderStatus: string,
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatDataOrder(ordersData: Array<IOrder>) {
  const formattedOrder: Row[] = [];
  let totalPrice = 0;
  ordersData.forEach(item => {
    const { id = '', customerInfo, itemsData, orderStatus = 'pending' } = item;
    (itemsData as Item[]).forEach(movie => {
      totalPrice += +movie.price;
    });
    formattedOrder.push({
      id,
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      totalPrice,
      orderStatus
    });
  });
  return (formattedOrder as Row[]);
}

export default function OrderTable() {
  const ordersData = useSelector((state: RootState) => state.order?.ordersData);
  const tableOrders = ordersData.length ? formatDataOrder(ordersData) : [];

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Total Price', field: 'totalPrice' },
      { title: 'Order Status', field: 'orderStatus' },
    ],
    data: [],
  });
  const dispatchUpdateOrder = useDispatch();
  const dispatchGetOrders = useDispatch();
  const dispatchDeleteOrder = useDispatch();

  const setOrderChanges = (changes: Row) => {
    const { orderStatus, firstName, lastName } = changes;
    if (changes.id) {
      const changedOrder = (ordersData as IOrder[]).find(item => item.id === changes.id);
      const customerData = changedOrder?.customerInfo;
      const clonedOrder: IOrder = ({
        ...changedOrder,
        orderStatus,
        customerInfo: {
          ...customerData,
          firstName,
          lastName
        }
      } as IOrder);

      return clonedOrder;
    }
    return {};
  };

  useEffect(() => {
    dispatchGetOrders(handleOrderApi());
  }, [dispatchGetOrders]);

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={tableOrders}
      icons={tableIcons}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            const updatedOrder = newData.id ? setOrderChanges(newData) : {};
            updatedOrder.id && dispatchUpdateOrder(handleOrderApi(updatedOrder, 'update'));
            setTimeout(() => {
              resolve();
              dispatchGetOrders(handleOrderApi());
            }, 2000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            oldData.id && dispatchDeleteOrder(handleOrderApi(oldData as IOrder, 'delete'));
            setTimeout(() => {
              resolve();
              dispatchGetOrders(handleOrderApi());
            }, 2000);
          }),
      }}
    />
  );
}
