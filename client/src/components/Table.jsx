import React from 'react';
import { TableContent, THead, Th, TBody, Td } from '../styled/table.js';

export const Table = ({ data }) => {
  return (
    <TableContent>
      <THead>
        <tr>
          {data.thead.map((romanKey) => (
            <Th key={romanKey}>{romanKey}</Th>
          ))}
        </tr>
      </THead>
      <TBody>
        <tr>
          {data.tbody.map((romanValue) => (
            <Td key={romanValue}>{romanValue}</Td>
          ))}
        </tr>
      </TBody>
    </TableContent>
  );
};
