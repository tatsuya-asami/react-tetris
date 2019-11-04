import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

interface ICell {
  type: 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
}

const Cell: React.FC<ICell> = ({ type }) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} />
);

export default Cell;
