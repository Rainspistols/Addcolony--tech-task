import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  mediaTablet: '@media(min-width: 768px)',
  mediaDesktop: '@media(min-width: 1280px)',

  color: {
    white: 'white',
    black: 'black',
    grey: '#cccccc',
    red: 'red',
    orange: 'orange',
    paper: '#fefbd3',
    green: 'green',
  },

  shadow: '3px 3px rgba(58, 53, 53, 0.73)',

  flex: {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    between: {
      display: 'flex',
      justifyContent: 'between',
      alignItems: 'center',
    },
  },

  input: {
    borderRadius: 5,
    height: 50,
    padding: '0 20px',
    marginRight: 20,
    border: '1px solid #cccccc',
    boxSizing: 'border-box',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 200,
  },

  button: {
    width: 50,
    height: 50,
    background: 'transparent',
    border: '1px solid #cccccc',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
