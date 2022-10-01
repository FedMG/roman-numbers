import styled from 'styled-components';

export const Button = styled('button')(({ theme }) => ({
  fontSize: '0.9em',
  border: 'none',
  padding: '0.6em 1.7em',
  color: theme.components.form.button.color,
  backgroundColor: theme.components.form.button.bgColor,
}));
