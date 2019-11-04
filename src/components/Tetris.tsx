import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import * as helpers from '../gameHelpers';

const Tetris: React.FC = () => {
  return (
    <div>
      <Stage stage={helpers.createStatge()} />
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
