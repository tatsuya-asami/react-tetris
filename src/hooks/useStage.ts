import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

// todo any
export const useStage = (player: any, resetPlayer?: any) => {
  const [stage, setStage] = useState<any>(createStage());

  useEffect(() => {
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
      }

      return newStage;
    };

    setStage((prev: any[]) => updateStage(prev));
  }, [player]);

  return [stage, setStage];
};
