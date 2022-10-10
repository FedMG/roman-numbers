import React from 'react';
import { convertToRoman } from './functionals/convertToRoman.js';
import { Table } from './components/Table.jsx';
import { Form } from './components/Form.jsx';
import { data } from './reference/data.js';
import { Typography } from './styled/Typography.js';
import { Section } from './styled/Section.js';
import { Main } from './styled/Main.js';

const { useState } = React;

export default function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [output, setOutput] = useState('');

  const inputHandler = (e) => {
    setError('');
    setInput(e.target.value);
  };

  const clickHandler = () => {
    setOutput('');

    if (/([1-9])/.test(input) && parseInt(input) == input) {
      setOutput(convertToRoman(input));
      setInput('');
      return '';
    }
    setError('The input is not a natural number (from 1 to 9)');
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <Section>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography as="h1" title>
            Roman Numbers
          </Typography>
        </div>
        <div style={{ width: '100%' }}>
          <Typography as="p" text>
            Roman numerals are a numeral system that originated in ancient Rome.
            Numbers are represented by combinations of letters from the Latin
            alphabet. Modern style uses seven symbols, each with a fixed integer
            value:
          </Typography>
        </div>
        <div
          style={{
            width: '100%',
          }}
        >
          <Table data={data} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9em 0',
            width: '100%',
          }}
        >
          <Typography as="span" subtitle>
            Convert to roman
          </Typography>
          <div>
            <Form
              handlers={[formHandler, inputHandler, clickHandler]}
              value={input}
            />
          </div>
          <div style={{ minHeight: '2em' }}>
            <Typography as="span" error>
              {error}
            </Typography>
          </div>
          <div style={{ border: '3px solid #5c64bd', padding: '1em' }}>
            <Typography as="span" output>
              The number {input} in roman is: {output}
            </Typography>
          </div>
        </div>
      </Section>
    </Main>
  );
}
