import React from 'react';
import { Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useHistory } from 'react-router';
import Typography from './Typography';

export default function AuthFailed() {
  const history = useHistory();
  const handleSignInPage = () => {
    history.push('/signin');
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ position: 'sticky', top: '12%', left: '4%' }}
        color="primary"
        size="large"
        startIcon={<LockOpenIcon />}
        onClick={handleSignInPage}
      >
        Go Sign In page
      </Button>
      <Typography align="center" variant="h3" marked="center" style={{ marginTop: 300, marginBottom: 350 }}>
        Authentication failed, please try again!
      </Typography>
    </>
  );
}
