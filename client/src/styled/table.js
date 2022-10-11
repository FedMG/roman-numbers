import styled from 'styled-components';

const TableContent = styled('table')(({ theme }) => ({
  letterSpacing: theme.components.table.letterSpa,
  fontSize: theme.components.table.fz,
  border: theme.components.table.border.table,
  borderCollapse: 'collapse',
  width: '100%',
  height: '100%',
}));

const THead = styled('thead')(({ theme }) => ({
  backgroundColor: theme.components.table.bgColor.thead,
  color: theme.components.table.color,
}));

const Th = styled('th')(({ theme }) => ({
  border: theme.components.table.border.th,
  padding: theme.components.table.pad.th_td,
}));

const TBody = styled('tbody')(({ theme }) => ({
  backgroundColor: theme.components.table.bgColor.tbody,
}));

const Td = styled('td')(({ theme }) => ({
  border: theme.components.table.border.td,
  padding: theme.components.table.pad.th_td,
  textAlign: 'center',
}));

export { TableContent, THead, Th, TBody, Td };
