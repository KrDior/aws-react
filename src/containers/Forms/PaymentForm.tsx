/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../FormFields';

type PaymentFormProps = {
  formField: any
};

export default function PaymentForm(props: PaymentFormProps) {
  const {
    formField: { nameOnCard, cardNumber, expiryDate, cvv }
  } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
}
