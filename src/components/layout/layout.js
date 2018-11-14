import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Grid } from 'react-flexbox-grid';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default ({ children }) => (
  <MuiThemeProvider theme={ theme }>
    <Grid fluid>
      { children }
    </Grid>
  </MuiThemeProvider>
);
