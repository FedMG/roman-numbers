import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle((props) => ({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial',
  },
  body: {
    color: props.colors ? 'blue' : 'black',
  },
}));
