import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

interface StageProps {
  stage: any[];
}

const Stage: React.FC<StageProps> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row =>
      row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>
);

export default Stage;
