import React from 'react';
import { Text, Title, Span } from '../styles/typography.js';

export const Typography = ({ type, children }) => {
  if (type === 'h1') {
    return <Title>{children}</Title>;
  }

  if (type === 'p') {
    return <Text>{children}</Text>;
  }

  if (type === 'span') {
    return <Span>{children}</Span>;
  }
};
