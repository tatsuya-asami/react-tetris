import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState<any>(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir: number) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    // setScore(0);
    // setRows(0);
    // setLevel(0);
  };

  const drop = () => {
    // increase level when player has cleared 10 rows
    // if (rows > (level + 1) * 10) {
    //   setLevel((prev: number) => prev + 1);
    //   setDropTime(1000 / (level + 1) + 200);
    // }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = (keyCode: number) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log('interval on');
        // setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    console.log('interval off');
    setDropTime(null);
    drop();
  };

  const move = (keyCode: number) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e: React.KeyboardEvent<any>) => move(e.keyCode)}
      onKeyUp={(e: React.KeyboardEvent<any>) => keyUp(e.keyCode)}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over"></Display>
          ) : (
            <div>
              <Display gameOver={false} text={`Score: ${score}`} />
              <Display gameOver={false} text={`Rows: ${rows}`} />
              <Display gameOver={false} text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
