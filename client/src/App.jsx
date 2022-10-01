import React from 'react';
import { convertToRoman } from './functionals/convertToRoman.js';
import { Table } from './components/Table.jsx';
import { data } from './reference/data.js';
import { Typography } from './components/Typography.jsx';
import { Form } from './components/Form.jsx';
import { Section } from './styles/Section.js';

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
    <main style={{ backgroundColor: '#eceaeb', height: '100%', margin: '5px' }}>
      <Section>
        <div>
          <Typography as="h1">Roman Numbers</Typography>
        </div>
        <div>
          <Typography as="p">
            Roman numerals are a numeral system that originated in ancient Rome.
            Numbers are represented by combinations of letters from the Latin
            alphabet. Modern style uses seven symbols, each with a fixed integer
            value:
          </Typography>
          <Table data={data} />
        </div>
        <div>
          <Typography as="span">Convert to roman</Typography>
          <div>
            <Form
              handlers={[formHandler, inputHandler, clickHandler]}
              value={input}
            />
          </div>
          <div>
            <Typography as="span">{error}</Typography>
          </div>
          <div>
            <Typography as="span">{output}</Typography>
          </div>
        </div>
      </Section>
    </main>
  );
}
