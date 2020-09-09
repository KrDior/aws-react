/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme: Theme) => ({
  content: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    },
  },
  contentMessage: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
  },
  contentAction: {
    paddingLeft: theme.spacing(2),
  },
  info: {
    flexShrink: 0,
    marginRight: theme.spacing(2),
  },
  close: {
    padding: theme.spacing(1),
  },
});

function Transition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Snackbar(props: any) {
  const {
    classes, onClose, message, ...other
  } = props;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6e3}
      transition={Transition}
      ContentProps={{
        'aria-describedby': 'snackbar',
        classes: {
          root: classes.content,
          message: classes.contentMessage,
          action: classes.contentAction,
        },
      }}
      message={(
        <>
          <InfoIcon className={classes.info} />
          <span id="snackbar">{message}</span>
        </>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default withStyles(styles)(Snackbar);
