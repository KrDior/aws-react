/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import clsx from 'clsx';
import MuiPaper from '@material-ui/core/Paper';
import { capitalize } from '@material-ui/core/utils';
import { withStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  backgroundLight: {
    backgroundColor: theme.palette.secondary.light,
  },
  backgroundMain: {
    backgroundColor: theme.palette.secondary.main,
  },
  backgroundDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: {
    padding: theme.spacing(1),
  },
});

type PaperProps = {
  background?: 'light' | 'main' | 'dark',
  classes?: any,
  className?: string,
  padding?: boolean,
  children?: React.ReactNode,
};

function Paper(props: PaperProps) {
  const { background = 'light', classes, className, padding = false, ...other } = props;
  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[`background${capitalize(background)}`],
        {
          [classes.padding]: padding,
        },
        className,
      )}
      {...other}
    />
  );
}

export default withStyles(styles)(Paper);
