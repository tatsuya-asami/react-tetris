import React from 'react';
import Cell from './Cell';

interface StageProps {
  stage: any[];
}

const Stage: React.FC<StageProps> = ({ stage }) => (
  <div>
    {stage.map(row =>
      row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />)
    )}
  </div>
);

export default Stage;
