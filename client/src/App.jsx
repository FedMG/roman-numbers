import React from 'react';
import { convertToRoman } from './functionals/convertToRoman.js';
import { Table } from './components/Table.jsx';
import { Form } from './components/Form.jsx';
import { data } from './reference/data.js';
import { Typography } from './styled/Typography.js';
import { Main } from './styled/Main.js';
import { Section } from './styled/Section.js';
import { Container } from './styled/Container.js';
const { useState } = React;

const responses = {
  input: '',
  output: '',
  error: false,
};

export default function App() {
  const [response, setResponse] = useState(responses);

  const inputHandler = (e) => {
    if (e.target.value <= 10000) {
      return setResponse({ ...responses, input: e.target.value });
    }

    setResponse({
      ...responses,
      input: response.input,
      error: 'Enter a integer from 1 to 9',
    });
  };

  const clickHandler = () => {
    const { input } = response;

    if (/([1-9])/.test(input) && parseInt(input) == input) {
      return setResponse({
        ...response,
        output: convertToRoman(response.input),
      });
    }

    setResponse({
      ...responses,
      error: 'Enter a integer from 1 to 9',
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  const result = response.output ? (
    <>
      {response.input} in roman is{' '}
      <Typography as="span" output>
        {response.output}
      </Typography>
    </>
  ) : response.error ? (
    <Typography as="span" error>
      {response.error}
    </Typography>
  ) : null;

  return (
    <Main>
      <Section>
        <Container title>
          <Typography as="h1" title>
            Roman Numbers
          </Typography>
        </Container>
        <Typography as="p" text>
          Roman numerals are a numeral system that originated in ancient Rome.
          Numbers are represented by combinations of letters from the Latin
          alphabet. Modern style uses seven symbols, each with a fixed integer
          value:
        </Typography>
        <Table data={data} />
        <Container form>
          <Typography as="span" subtitle>
            Convert to roman
          </Typography>
          <Form
            handlers={[formHandler, inputHandler, clickHandler]}
            value={response.input}
          />
          <Container>{result}</Container>
        </Container>
      </Section>
    </Main>
  );
}
