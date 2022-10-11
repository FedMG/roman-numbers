import styled from 'styled-components';

export const Container = styled('div')((props) =>
  props.form
    ? {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9em 0',
        width: '100%',
      }
    : props.title
    ? {
        width: '100%',
        textAlign: 'center',
      }
    : props.error
    ? { minHeight: '2em' }
    : {
        border: '3px solid #5c64bd',
        padding: '1em',
      }
);
