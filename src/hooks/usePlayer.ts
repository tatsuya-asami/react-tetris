import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

interface IusePlayer {
  pos: { x: number; y: number };
  tetromino?: number[][];
  collided?: boolean | undefined;
}

export const usePlayer = () => {
  const [player, setPlayer] = useState<any>({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  interface IupdatePlayerPos {
    x: number;
    y: number;
    collided?: boolean;
  }

  const updatePlayerPos = ({ x, y, collided }: IupdatePlayerPos): void => {
    setPlayer((prev: any) => ({
      ...prev,
      pos: {
        x: prev.pos.x += x,
        y: prev.pos.y += y,
      },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
