/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import clsx from 'clsx';
import { withStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 300,
      maxHeight: 500,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },
});

type ProductHeroLayoutProps = {
  backgroundClassName: string,
  children?: React.ReactNode,
  classes: {
    container: string,
    backdrop: string,
    root: string,
    background: string,
  },
};

function ProductHeroLayout(props: ProductHeroLayoutProps) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div
          className={clsx(classes.background, backgroundClassName)}
        />
      </Container>
    </section>
  );
}

export default withStyles(styles as any)(ProductHeroLayout as any);
