// --- Post bootstrap -----
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import withRoot from '../theme/withRoot';
import OrderTable from '../components/OrderTable';

function AdminOrders() {
  return (
    <>
      <Container style={{ minHeight: 'calc(80vh)', paddingTop: '5%' }}>
        <OrderTable />
        <Button
          style={{ marginTop: '3%', marginBottom: '3%' }}
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          component={Link}
          to="/uploadProduct"
        >
          Upload Product
        </Button>
      </Container>
    </>
  );
}

export default withRoot(AdminOrders);
