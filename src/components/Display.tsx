import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

interface IDisplay {
  gameOver: boolean;
  text: string;
}

const Display: React.FC<IDisplay> = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
