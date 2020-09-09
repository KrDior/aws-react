// --- Post bootstrap -----
import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import withRoot from '../theme/withRoot';
import Typography from '../components/Typography';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';
import handleAuthStatus from '../utils/handleAuthStatus';

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

type SignInValue = {
  email: string,
  password: string,
};

function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [sent, setSent] = React.useState(false);

  const validate = (values: SignInValue) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = email(values.email);
      }
    }

    return errors;
  };

  const onSubmit = async () => {
    await handleAuthStatus.authenticate().then(() => {
      setSent(true);
      history.push('/orders');
    });
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
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              align="center"
              underline="always"
              component={RouterLink}
              to="/signup"
            >
              Sign Up here
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
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
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
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent
                  ? 'In progress…'
                  : 'Sign In'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center" variant="inherit">
          <Link
            underline="always"
            component={RouterLink}
            to="/forgotpassword"
          >
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
    </>
  );
}

export default withRoot(SignIn);
