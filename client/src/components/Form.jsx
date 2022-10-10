import React from 'react';
import { Input } from '../styled/Input.js';
import { Button } from '../styled/Button.js';
import { Board } from '../styled/Board.js';

export const Form = ({ handlers, value }) => {
  const [formHandler, inputHandler, clickHandler] = handlers;

  return (
    <Board onSubmit={formHandler}>
      <Input type="text" onChange={inputHandler} value={value} />
      <Button onClick={clickHandler}>Covert</Button>
    </Board>
  );
};
