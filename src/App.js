// fundamentos de la Programación funcional.
import React from 'react';
import { convertToRoman } from './functionals/convertToRoman.js';
import { Table } from './components/Table.js';
import { data } from './reference/data.js';
import { Typography } from './components/Typography.js';
import { Form } from './components/Form.js';
import { Section } from './styles/Section.js'

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
    <main>
      <Section>
        <div>
          <Typography type="h1">Roman Numbers</Typography>
        </div>
        <div>
          <Typography type="p">
            Roman numerals are a numeral system that originated in ancient Rome.
            Numbers are represented by combinations of letters from the Latin
            alphabet. Modern style uses seven symbols, each with a fixed integer
            value:
          </Typography>
          <Table data={data} />
        </div>
        <div>
          <Typography type="span">Convert to roman</Typography>
          <div>
            <Form
              handlers={[formHandler, inputHandler, clickHandler]}
              value={input}
            />
          </div>
          <div>
            <Typography type="span">{error}</Typography>
          </div>
          <div>
            <Typography type="span">{output}</Typography>
          </div>
        </div>
      </Section>
    </main>
  );
}
