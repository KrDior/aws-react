/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

type InputFieldProps = {
  name: string,
  errorText?: string,
  label: string,
  fullWidth: boolean,
};

export default function InputField(props: InputFieldProps) {
  const { ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      error={(meta.touched && meta.error && true) as any}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
