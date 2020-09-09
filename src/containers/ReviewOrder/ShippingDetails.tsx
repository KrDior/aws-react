/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

type PaymentDetailsProps = {
  formValues: any,
};

function PaymentDetails(props: PaymentDetailsProps) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName, lastName, address1 } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;
