import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import * as helpers from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

const Tetris: React.FC = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={helpers.createStatge()} />
        <aside>
          <div>
            <Display gameOver={true} text="Score" />
            <Display gameOver={false} text="Rows" />
            <Display gameOver={true} text="Level" />
            <StartButton />
          </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
