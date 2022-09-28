import React from 'react';
import { TableContent, THead, Th, TBody, Td } from '../styles/table.js';

export const Table = ({ data }) => {
  return (
    <TableContent>
      <THead>
        <tr>
          {data.thead.map((romanKey) => (
            <Th>{romanKey}</Th>
          ))}
        </tr>
      </THead>
      <TBody>
        <tr>
          {data.tbody.map((romanValue) => (
            <Td>{romanValue}</Td>
          ))}
        </tr>
      </TBody>
    </TableContent>
  );
};
