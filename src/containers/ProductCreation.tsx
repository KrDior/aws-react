/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import withRoot from '../theme/withRoot';
import { Item } from '../types/store';
import fetchCreateProduct from '../utils/createProduct';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const options = [
  {
    value: 'available',
  },
  {
    value: 'not available',
  }
];

function ProductCreation() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('Put title');
  const [overview, setOverview] = React.useState('...');

  const [vote_count, setVoteCount] = React.useState('0');
  const [vote_average, setVoteAverage] = React.useState('0');
  const [release_date, setReleaseDate] = React.useState('8/14/2020');
  const [price, setPrice] = React.useState('0');
  const [poster_path, setPosterPath] = React.useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fnot_available.html&psig=AOvVaw3d9eIP8CboMmmf2Pb51shN&ust=1597482755135000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiuwpOtmusCFQAAAAAdAAAAABAD');
  const [genres, setGenres] = React.useState('Comedy');
  const [availability, setAvailability] = React.useState(options[0].value);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeGenres = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverview(event.target.value);
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleChangeReleaseDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReleaseDate(event.target.value);
  };

  const handleChangeOverview = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOverview(event.target.value);
  };

  const handleChangePosterPath = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosterPath(event.target.value);
  };

  const handleChangeVoteAverage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoteAverage(event.target.value);
  };

  const handleChangeVoteCount= (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoteCount(event.target.value);
  };

  const handleChangeAvailability= (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvailability(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    const productId = new Date().getTime().toString();
    event.preventDefault();
    const item: Item = {
      id: productId,
      title,
      release_date,
      poster_path,
      genres: genres.split(','),
      vote_count,
      tagline: '',
      vote_average,
      overview,
      budget: '0',
      revenue: '0',
      runtime: 'null',
      availability: availability === 'available',
      price,
    };
    fetchCreateProduct(item);
    clearForm();
  };

  const clearForm = (): void => {
    setTitle('Film title');
    setOverview('...');
    setGenres('Comedy');
    setPrice('0');
    setReleaseDate('');
    setPosterPath('');
    setVoteAverage('0');
    setVoteCount('0');
    setAvailability(options[0].value);
  };

  return (
    <>
      <Container style={{ minHeight: 'calc(80vh)', paddingTop: '5%' }}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Title"
              multiline
              rowsMax={4}
              value={title}
              onInput={handleChangeTitle}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Genres"
              multiline
              rowsMax={4}
              value={genres}
              onInput={handleChangeGenres}
            />
            <TextField
              id="standard-multiline-static"
              label="Overview"
              multiline
              rows={4}
              value={overview}
              onInput={handleChangeOverview}
            />
          </div>

          <div>
            <TextField
              id="filled-multiline-flexible"
              label="Price"
              multiline
              rowsMax={4}
              value={price}
              variant="filled"
              onInput={handleChangePrice}
            />
            <TextField
              id="filled-multiline-flexible"
              label="Price"
              multiline
              rowsMax={4}
              value={release_date}
              variant="filled"
              onInput={handleChangeReleaseDate}
            />
            <TextField
              id="filled-multiline-flexible"
              label="Price"
              multiline
              rowsMax={4}
              value={poster_path}
              variant="filled"
              onInput={handleChangePosterPath}
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Vote count"
              multiline
              rowsMax={4}
              value={vote_count}
              variant="outlined"
              onInput={handleChangeVoteCount}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Vote average"
              multiline
              rowsMax={4}
              value={vote_average}
              variant="outlined"
              onInput={handleChangeVoteAverage}
            />
            <TextField
              id="standard-select-availability"
              select
              label="Availability"
              value={availability}
              onChange={handleChangeAvailability}
              helperText="Please select availability"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            Create
          </Button>
        </form>
      </Container>
    </>
  );
}

export default withRoot(ProductCreation);
