/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, RouteComponentProps } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withRouter, useHistory, useLocation } from 'react-router';
import { withStyles, Theme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '../components/Typography';
import Button from '../components/Button';
import ProductHeroLayout from './ProductHeroLayout';
import { addToBucket } from '../store/actions/actionCreator';

const backgroundImage = 'https://harpkaurwrites.files.wordpress.com/2016/01/273d705bfba3c478db2197cab595bb77-d5tog3t.jpg';
const backgroundImageStatic = 'https://commercialassurance.com.au/wp-content/themes/highstand/assets/images/default.jpg';

const styles = (theme: Theme) => ({
  root: {
    maxHeight: 600,
  },
  hidden: {
    display: 'none',
  },
  movieBackground: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  backgroundSeacrh: {},
  buttonGroup: {},
  cover: {
    marginTop: theme.spacing(8),
    marginRight: theme.spacing(3),
    height: 400,
    borderRadius: 5,
  },
  rating: {
    marginTop: 100,
    position: 'relative',
    left: 142,
  },
  price: {
    height: 50,
    width: 100,
    borderRadius: 15,
    padding: 0,
    boxShadow: '-5px 12px 40px 13px rgba(70,140,176,0.65)',
    marginTop: theme.spacing(0),
    marginLeft: 10,
    display: 'inline-block',
    fontSize: 12,
  },
  button: {
    minWidth: 200,
  },
  buttonOrder: {
    borderRadius: 15,
    backgroundColor: '#5d2c5f',
  },
  h3: {},
  h5: {
    marginBottom: theme.spacing(2),
    marginRight: 160,
    maxHeight: 80,
  },
  more: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  textField: {},
  input: {},
  searchText: {},
  activeSort: {},
  notFound: {},
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

type RouteParams = {};

interface MoviePageProps extends RouteComponentProps<RouteParams> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes?: any;
  price?: number;
  overview?: string;
  title?: string,
  poster_path?: string,
  genres?: Array<string>,
  vote_count?: number,
  availability?: boolean,
  id?: string,
}

const MoviePage = (props: MoviePageProps): JSX.Element => {
  const {
    title, poster_path, vote_count = 0, overview, price = 0, genres, classes,
    availability, id
  } = props;
  const history = useHistory();
  const dispatchSetMovieBucket = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setDefaultImg = (e: any) => {
    e.target.onerror = null;
    e.target.src = backgroundImageStatic;
  };
  const [isShow, setIsShow] = useState(true);
  const location = useLocation();
  const pushToBucket = () => {
    const orderedMovie = {
      id,
      title,
      poster_path,
      overview,
      price,
      genres,
      availability
    };
    dispatchSetMovieBucket(addToBucket(orderedMovie));
    setIsShow(false);
  };
  const handleBucket = () => {
    history.push('/bucket');
  };

  useEffect(
    () => {
      setIsShow(true);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1500);
    },
    [location]
  );

  return (
    <ProductHeroLayout backgroundClassName={classes.movieBackground}>
      <div className={classes.root} id={id}>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="row"
          flexWrap="no-wrap"
          p={2}
          m={2}
        >
          <Box alignSelf="flex-start" flexShrink={1}>
            <img src={poster_path} alt="increase priority" className={classes.cover} onError={setDefaultImg} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            flexWrap="wrap"
            flexShrink={1}
          >
            <Box alignSelf="flex-end" className={classes.rating}>
              <Typography component="legend" variant="inherit">Likes</Typography>
              <StyledRating
                name="customized-color"
                value={vote_count && +vote_count / 2}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </Box>
            <Box alignSelf="flex-start" className={classes.h5}>
              <Typography color="inherit" align="center" variant="h4" style={{ marginTop: -60 }}>
                {title}
              </Typography>
            </Box>
            <Box alignSelf="center">
              <Typography variant="body2" color="inherit" className={classes.more}>
                {overview}
              </Typography>
            </Box>
            {
              isShow ? (
                <Box alignSelf="flex-end">
                  {
                    availability
                      ? (
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.price}
                          disabled={!availability}
                          onClick={pushToBucket}
                        >
                          <p style={{ marginTop: 2, marginBottom: 0, color: '#040404' }}>{availability ? 'Buy Now' : ''}</p>
                          <p style={{ marginTop: 0, marginBottom: -2 }}>{availability}</p>
                        </Button>
                      )
                      : (
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.price}
                        >
                          <p style={{ marginTop: 2, marginBottom: 0, color: '#040404' }}>Waiting</p>
                          <p style={{ marginTop: 0, marginBottom: -2 }}>availability</p>
                        </Button>
                      )
                  }

                  <Button variant="contained" color="secondary" className={classes.price}>
                    <p style={{ marginTop: 2, marginBottom: 0, color: '#040404' }}>Price</p>
                    <p style={{ marginTop: -5, marginBottom: -2, fontSize: '1.5em' }}>{`${price} $`}</p>
                  </Button>
                </Box>
              )
                :
                (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonOrder}
                    startIcon={<AddShoppingCartIcon />}
                    onClick={handleBucket}
                  >
                    Go to order
                  </Button>
                )
            }
          </Box>
          <Box alignSelf="flex-start" flexShrink={4}>
            <Link underline="always" component={RouterLink} to="/">
              <SearchIcon color="secondary" style={{ fontSize: 40, marginTop: 80, marginLeft: 100 }} />
            </Link>
          </Box>
        </Box>
      </div>
    </ProductHeroLayout>
  );
};

const MoviePageWithRouter = withRouter(MoviePage);

export default compose(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  withStyles(styles as any, { name: 'ProductCategories' }),
)(MoviePageWithRouter);
