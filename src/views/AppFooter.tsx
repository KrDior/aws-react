import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '../components/Typography';
import withRoot from '../theme/withRoot';

function Copyright() {
  return (
    <>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        LCC Company name
      </Link>
      {' '}
      {new Date().getFullYear()}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.dark,
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
  },
  iconsWrapper: {
    height: 80,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root} variant="inherit">
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a
                  className={classes.icon}
                  href="https://twitter.com/"
                >
                  <FacebookIcon
                    className={classes.icon}
                    color="secondary"
                  />
                </a>
                <a
                  className={classes.icon}
                  href="https://facebook.com/"
                >
                  <TwitterIcon
                    className={classes.icon}
                    color="secondary"
                  />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant="caption">
              {'Films are licensed by '}
              <Link
                href="https://www.netflix.com/"
                rel="sponsored"
                title="netflix"
              >
                www.netflix.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default withRoot(AppFooter);
