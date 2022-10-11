import styled from 'styled-components';

export const Button = styled('button')(({ theme: { components } }) => ({
  fontSize: components.form.fsizes.btn,
  border: components.form.borders.btn,
  borderRadius: components.form.borders.btnRad,
  padding: components.form.pad.btn,
  color: components.form.colors.btn,
  backgroundColor: components.form.bgColors.btn,
  '&:hover': {
    backgroundColor: components.form.bgColors.btnHover,
    color: components.form.colors.btnHover,
  },
  '&:active': {
    backgroundColor: components.form.bgColors.btnActive,
    color: components.form.colors.btnActive,
  },
}));
