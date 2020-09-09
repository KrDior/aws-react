/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ButtonTypeMap } from '@material-ui/core/Button/Button';
import defer from './defer';
import Button from '../components/Button';


interface FormButtonProps extends ButtonTypeMap {
  disabled: boolean,
  mounted: boolean,
  children: React.ReactNode,
}

function FormButton(props: FormButtonProps) {
  const { disabled, mounted, ...others } = props;
  return (
    <Button
      disabled={!mounted || disabled}
      type="submit"
      variant="contained"
      {...others}
    />
  );
}

export default defer(FormButton);
