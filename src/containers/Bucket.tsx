/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './ReviewOrder';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import handleOrderApi from '../store/middleware/getDataOrders';
import { RootState } from '../types/store';



const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  layout: {
    width: 'auto',
    minHeight: '80vh',
    padding: '14px 0',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export default function Bucket() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const orderId = new Date().getTime().toString();
  const movieOrder = useSelector((state: RootState) => state.order);
  const dispatchGetOrders = useDispatch();

  function _sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values: any, actions: any) {
    await _sleep(1000);
    const totalPrice = movieOrder.bucketData.reduce((acc: number, sum: any) => acc + +sum.price, 0);
    const userOrder = {
      customerInfo: values,
      itemsData: movieOrder.bucketData,
      id: orderId,
      orderStatus: 'pending',
      totalCost: totalPrice.toString(),
    };

    dispatchGetOrders(handleOrderApi(userOrder, 'post'));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values: any, actions: any) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <main className={classes.layout}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is {orderId} We have emailed your order confirmation,
                and will send you an update when your order has shipped.
              </Typography>
            </>
          ) : (
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId}>
                  {_renderStepContent(activeStep)}

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? 'Place order' : 'Next'}
                      </Button>
                      {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </>
      </main>
    </>
  );
}
