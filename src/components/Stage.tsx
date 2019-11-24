import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';
import GameOver from './GameOver';
import { GameOverModal } from './styles/StyledGameOverModal';

interface IStage {
  gameOver: boolean;
  score: number;
  stage: (number | string)[][];
}

const Stage: React.FC<IStage> = ({ gameOver, score, stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {gameOver ? (
      <GameOverModal>
        <GameOver score={score}></GameOver>
      </GameOverModal>
    ) : (
      stage.map(row =>
        row.map((cell: any, x: number) => <Cell key={x} type={cell[0]} />)
      )
    )}
  </StyledStage>
);

export default Stage;
