import React, { ReactNode } from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

export interface ICell {
  type: 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
}

const Cell: React.FC<ICell> = ({ type }) => {
  console.log('rerender');
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};
// avoid rendering too many times
export default React.memo(Cell);
