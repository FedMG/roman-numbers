import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial',
  },
  body: {
    backgroundColor: '#5c64bd',
  },
});
