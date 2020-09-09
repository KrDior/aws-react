/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
    height: '440px',
  },
  cardContent: {
    maxWidth: 400,
    maxHeight: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -80,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  image: {
    position: 'absolute',
    height: 440,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 800,
  },
});

type ProductCTAProps = {
  classes: {
    root: string;
    imagesWrapper: string,
    cardWrapper: string,
    cardContent: string,
    imageDots: string,
    image: string,
    card: string,
    textField: string,
    button: string,
  }
};

function ProductCTA(props: ProductCTAProps) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">Taste the holidays of the everyday close to home.</Typography>
              <TextField noBorder className={classes.textField} placeholder="Your email" />
              <Button type="submit" color="primary" variant="contained" className={classes.button}>
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img src="https://images2.persgroep.net/rcs/XvyvvK2ix-01AENPyvku3J5XZJc/diocontent/62956146/_crop/0/40/1783/1007/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8" alt="call to action" className={classes.image} />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar open={open} onClose={handleClose} message="We will send you our best offers, once a week." />
    </Container>
  );
}

export default withStyles(styles as any)(ProductCTA as any);
