import styled from 'styled-components';

export const Input = styled('input')(({ theme: { components } }) => ({
  padding: components.form.pad.input,
  border: components.form.borders.input,
  borderRadius: components.form.borders.inputRad,
  outline: 'none',
  width: '100%',

  '&:active': {
    outline: '1.2px solid #4e559f',
  },
}));
