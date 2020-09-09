/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

type ProductSmokingHeroProps = {
  classes: {
    root: string,
    button: string,
    link: string,
  }
};

function ProductSmokingHero(props: ProductSmokingHeroProps) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
    </Container>
  );
}

export default withStyles(styles as any)(ProductSmokingHero as any);
