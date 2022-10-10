import React from 'react';
import { Input } from '../styled/Input.js';
import { Button } from '../styled/Button.js';

export const Form = ({ handlers, value }) => {
  const [formHandler, inputHandler, clickHandler] = handlers;

  return (
    <form onSubmit={formHandler}>
      <Input type="text" onChange={inputHandler} value={value} />
      <Button onClick={clickHandler}>Covert</Button>
    </form>
  );
};
