import styled from 'styled-components';

const TableContent = styled('table')(({ theme }) => ({
  letterSpacing: '0.1em',
  fontSize: '.8rem',
  borderCollapse: 'collapse',
  border: theme.components.table.bd,
  boxShadow: theme.components.table.shadow,
}));

const THead = styled('thead')(() => ({
  backgroundColor: '#5c64bd',
  color: '#eceaeb',
}));

const Th = styled('th')(() => ({
  border: '1px solid #eceaeb',
  padding: '0.45em 0.9em',
}));

const TBody = styled('tbody')(() => ({
  backgroundColor: '#eceaeb',
}));

const Td = styled('td')(() => ({
  border: '1px solid rgb(190, 190, 190)',
  padding: '0.45em 0.9em',
  textAlign: 'center',
}));

export { TableContent, THead, Th, TBody, Td };
