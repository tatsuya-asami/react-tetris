import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (
  player: {
    pos: { x: number; y: number };
    tetromino: (number | string)[][];
    collided: boolean;
  },
  resetPlayer: () => void
) => {
  const [stage, setStage] = useState<any>(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: (number | string)[][][]) =>
      newStage.reduce(
        (ack: (number | string)[][][], row: (number | string)[][]) => {
          if (
            row.findIndex((cell: (number | string)[]) => cell[0] === 0) === -1
          ) {
            setRowsCleared((prev: number) => prev + 1);
            ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
            return ack;
          }
          ack.push(row);
          return ack;
        },
        []
      );

    const updateStage = (prevStage: (number | string)[][][]) => {
      const newStage = prevStage.map((row: (number | string)[][]) =>
        row.map((cell: (number | string)[]) =>
          cell[1] === 'clear' ? [0, 'clear'] : cell
        )
      );
      player.tetromino.forEach((row: (number | string)[], y: number) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage((prev: (number | string)[][][]) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
