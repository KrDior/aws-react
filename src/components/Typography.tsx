/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import MuiTypography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

type ITypography = {
  children?: React.ReactNode,
  classes?: any,
  marked?: string,
  gutterBottom?: boolean,
  style?: any;
  align?: 'inherit' | 'left' | 'right' | 'center' | 'justify',
  variant: 'h1' | 'h3' | 'h2' | 'inherit' | 'button' | 'overline' | 'caption' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'srOnly',
  color?: any,
  component?: string,
  className?: string,
};



function Typography(props: ITypography) {
  const {
    children, classes, marked = false, variant, ...other
  } = props;

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? <span className={classes[`marked${capitalize(variant) + capitalize(marked)}`]} /> : null}
    </MuiTypography>
  );
}

export default withStyles(styles)(Typography);
