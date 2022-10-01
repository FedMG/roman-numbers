import styled from 'styled-components';

const Title = styled('h1')(() => ({}));
const Text = styled('p')(() => ({}));
const Span = styled('span')((props) => ({
  color: (props) => (props.error ? 'red' : ''),
}));

export { Text, Title, Span };
