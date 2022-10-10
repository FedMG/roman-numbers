import styled from 'styled-components';

export const Button = styled('button')(({ theme: { components } }) => ({
  fontSize: components.form.fsizes.btn,
  border: components.form.borders.btn,
  padding: components.form.pad.btn,
  color: components.form.colors.btn,
  backgroundColor: components.form.bgColors.btn,
}));
