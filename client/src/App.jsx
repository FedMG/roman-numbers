import React from 'react';
import { convertToRoman } from './functionals/convertToRoman.js';
import { Table } from './components/Table.jsx';
import { Form } from './components/Form.jsx';
import { data } from './reference/data.js';
import { Typography } from './styled/Typography.js';
import { Section } from './styled/Section.js';
import { Main } from './styled/Main.js';
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
          <Container error>
            <Typography as="span" error>
              {response.error}
            </Typography>
          </Container>
          <Container>
            <Typography as="span" output>
              The number{' '}
              <span
                style={{
                  margin: '0 0.3em',
                  color: '#5c64bd',
                }}
              >
                {response.output ? response.input : null}
              </span>{' '}
              in roman is: {response.output}
            </Typography>
          </Container>
        </Container>
      </Section>
    </Main>
  );
}
