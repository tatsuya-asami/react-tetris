import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

export interface ICell {
  type: 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
}

const Cell: React.FC<ICell> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
