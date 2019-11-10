import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

// todo any
export const useStage = (player: any, resetPlayer?: any) => {
  const [stage, setStage] = useState<any>(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: any) =>
      newStage.reduce((ack: any, row: any) => {
        if (row.findIndex((cell: any) => cell[0] === 0) === -1) {
          setRowsCleared((prev: number) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = (prevStage: any[]) => {
      const newStage = prevStage.map(row =>
        row.map((cell: any[]) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );
      player.tetromino.forEach((row: any[], y: number) => {
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

    setStage((prev: any[]) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
