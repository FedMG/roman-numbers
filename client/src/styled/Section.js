import styled from 'styled-components';

export const Section = styled('section')(({ theme }) => ({
  padding: '1.4em',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: '#eceaeb',
  gap: '1.2em 0',
  maxWidth: '45em',
  borderRadius: '0.3em',
  boxShadow: '0 0.15em 0.9em 0 #111',
}));
