/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import TextField from '../components/TextField';

type RFTextFieldProps = {
  autoComplete: any,
  input: any,
  InputProps: any,
  meta: any,
};

function RFTextField(props: RFTextFieldProps) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextField
      isError={Boolean(touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ''}
    />
  );
}

export default RFTextField;
