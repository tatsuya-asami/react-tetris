import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

interface IusePlayer {
  pos: { x: number; y: number };
  tetromino: number[][];
  collided: boolean | undefined;
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
    collided: boolean;
  }

  const updatePlayerPos = ({ x, y, collided }: IupdatePlayerPos): void => {
    setPlayer((prev: IusePlayer) => ({
      ...prev,
      pos: {
        x: prev.pos.x += x,
        y: prev.pos.y += y,
      },
      collided,
    }));
  };

  const rotate = (matrix: (number | string)[][], dir: number) => {
    // make the rows to become columns(response)
    const rotatedTetro = matrix.map((_: (number | string)[], index: number) =>
      matrix.map((col: (number | string)[]) => col[index])
    );
    // reverse each row to get a rotated matrix
    if (dir > 0) {
      return rotatedTetro.map((row: (number | string)[]) => row.reverse());
    }
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage: (number | string)[][], dir: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
