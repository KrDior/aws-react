/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import moment from 'moment';
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
  const { nameOnCard, cardNumber, expiryDate } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Payment details
      </Typography>
      <Grid container>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Visa</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card holder</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{nameOnCard}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Card number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{cardNumber}</Typography>
          </Grid>
        </>
        <>
          <Grid item xs={6}>
            <Typography gutterBottom>Expiry Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {moment(expiryDate).format('MM/YY')}
            </Typography>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
