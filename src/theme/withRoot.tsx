import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

type ComponentProps = {};

function withRoot<BaseProps extends ComponentProps>(Component: React.ComponentType<BaseProps>) {
  function WithRoot(props: ComponentProps) {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props as BaseProps} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
