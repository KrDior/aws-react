/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import clsx from 'clsx';
import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  error: {
    backgroundColor: theme.palette.error.contrastText,
    color: theme.palette.error.dark,
  },
  success: {
    backgroundColor: theme.palette.success.contrastText,
    color: theme.palette.success.dark,
  },
});

type FormFeedbackProps = {
  children?: React.ReactNode,
  classes: {
    error: string,
    success: string,
    root: string,
  },
  className?: string,
  error?: boolean,
  success?: boolean,
};

function FormFeedback(props: FormFeedbackProps) {
  return (
    <div
      className={clsx(
        props.classes.root,
        {
          [props.classes.error]: props.error,
          [props.classes.success]: props.success,
        },
        props.className,
      )}
    >
      <Typography variant="h3" color="inherit">{props.children}</Typography>
    </div>
  );
}

export default withStyles(styles)(FormFeedback);
