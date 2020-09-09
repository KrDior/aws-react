// --- Post bootstrap -----
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import withRoot from '../theme/withRoot';
import Typography from '../components/Typography';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

type SignUpValue = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

function SignUp() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const validate = (values: SignUpValue) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = email(values.email);
      }
    }

    return errors;
  };

  const onSubmit = () => {
    setSent(true);
  };

  return (
    <>
      <AppForm>
        <>
          <Typography
            variant="h3"
            gutterBottom
            marked="center"
            align="center"
          >
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link
              underline="always"
              component={RouterLink}
              to="/signin"
            >
              Already have an account?
            </Link>
          </Typography>
        </>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit, submitting }) => (
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) => (submitError ? (
                  <FormFeedback
                    className={classes.feedback}
                    error
                  >
                    {submitError}
                  </FormFeedback>
                ) : null)}
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent
                  ? 'In progress…'
                  : 'Sign Up'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </>
  );
}

export default withRoot(SignUp);
