import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

interface IStage {
  stage: (number | string)[][];
}

const Stage: React.FC<IStage> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row =>
      row.map((cell: any, x: number) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>
);

export default Stage;
