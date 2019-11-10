import React, { useState } from 'react';
import { createStage } from '../gameHelpers';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, null);

  console.log('re-render');

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move()}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"></Display>
          ) : (
            <div>
              <Display gameOver={false} text="Score" />
              <Display gameOver={false} text="Rows" />
              <Display gameOver={false} text="Level" />
              <StartButton onClick={startGame} />
            </div>
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
