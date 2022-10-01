import styled from 'styled-components';

const TableContent = styled('table')(() => ({
  borderCollapse: 'collapse',
  border: '2px solid rgb(200, 200, 200)',
  letterSpacing: '1px',
  fontDamily: 'sans-serif',
  fontAize: '.8rem',
}));

const THead = styled('thead')(() => ({
  color: 'black',
  backgroundColor: '#3f87a6',
  color: '#fff',
}));

const Th = styled('th')(() => ({
  border: '1px solid rgb(190, 190, 190)',
  padding: '5px 10px',
}));

const TBody = styled('tbody')(() => ({
  backgroundColor: '#e4f0f5',
}));

const Td = styled('td')(() => ({
  border: '1px solid rgb(190, 190, 190)',
  padding: '5px 10px',
  textAlign: 'center',
}));

export { TableContent, THead, Th, TBody, Td };
