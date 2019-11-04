import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris: React.FC = () => {
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
          <StartButton />
        </div>
      </aside>
    </div>
  );
};

export default Tetris;
