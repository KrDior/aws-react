import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState, IBucketItem } from '../../types/store';

const useStyles = makeStyles(() => ({
  listItem: {},
  total: {}
}));

type OrderItem = {
  name?: string,
  price?: string | number,
  desc?: string,
};

function ProductDetails() {
  const classes = useStyles();
  const movieOrder = useSelector((state: RootState) => state.order);
  let totalPrice = 0;
  const getProducts = () => {
    const orders: Array<OrderItem> = [] as Array<OrderItem>;
    if (movieOrder.bucketData) {
      movieOrder.bucketData.forEach((item: IBucketItem) => {
        const { title, price = 0, overview = '' } = item;
        totalPrice += +price;
        orders.push(
          { name: title, desc: overview.slice(20), price }
        );
      });
    }
    return orders;
  };

  return (
    <List disablePadding>
      {getProducts().map(product => (
        <ListItem className={classes.listItem} key={product.name}>
          <ListItemText primary={product.name} secondary={product.desc} />
          <Typography variant="body2">{`$${product.price}`}</Typography>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" className={classes.total}>
          {`$${totalPrice}`}
        </Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
