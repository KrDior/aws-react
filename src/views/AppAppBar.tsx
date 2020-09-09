/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import AppBar from '../components/AppBar';

const styles = (theme: Theme) => ({
  title: {
    fontSize: 24,
    marginRight: 30,
  },
  auth: {
    marginRight: 20,
  },
  titleIcon: {
    marginBottom: -3,
  },
  bucketIcon: {
    fontSize: 30,
    marginBottom: -10,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

type AppAppBarProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: any,
};

function AppAppBar(props: AppAppBarProps) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              variant="h6"
              underline="none"
              className={clsx(
                classes.auth,
                classes.rightLink,
                classes.linkSecondary,
              )}
              component={RouterLink}
              to="/bucket"
            >
              <ShoppingCartIcon className={classes.bucketIcon} />
              Go to order
            </Link>
          </div>
          <Link
            variant="h5"
            underline="hover"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            <AppsOutlinedIcon className={classes.titleIcon} />
            Home
          </Link>
          <Link
            variant="h5"
            underline="hover"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/privacy"
          >
            <AssignmentIndIcon className={classes.titleIcon} />
            Privacy
          </Link>
          <Link
            variant="h5"
            underline="hover"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/terms"
          >
            <AssessmentIcon className={classes.titleIcon} />
            Terms
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.auth}
              component={RouterLink}
              to="/signin"
            >
              Sign In
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.auth}
              component={RouterLink}
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(
                classes.auth,
                classes.rightLink,
                classes.linkSecondary,
              )}
              component={RouterLink}
              to="/forgotpassword"
            >
              <LockOpenIcon className={classes.titleIcon} />
              Forgot password
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}


export default withStyles(styles)(AppAppBar);
