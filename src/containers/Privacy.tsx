// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import withRoot from '../theme/withRoot';
import Typography from '../components/Typography';
import Markdown from '../components/Markdown';
import privacy from '../views/privacy';

function Privacy() {
  return (
    <>
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
    </>
  );
}

export default withRoot(Privacy);
