import styled from 'styled-components';

export const Input = styled('input')(({ theme: { components } }) => ({
  padding: components.form.pad.input,
  width: '100%',
}));
