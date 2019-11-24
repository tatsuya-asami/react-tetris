import React from 'react';
import Scores from './Scores';

interface IGameOver {
  score: number;
  // TODO DBから取得
  selfBest?: number;
}

const GameOver: React.FC<IGameOver> = ({ score, selfBest }) => {
  return (
    <div>
      {/* TODO DBから取得できなかったら0に直す */}
      <Scores score={score} selfBest={selfBest || 9999} />
    </div>
  );
};

export default GameOver;
