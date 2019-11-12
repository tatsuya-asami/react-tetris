import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

interface IStartButton {
  callback: () => void;
}

const StartButton: React.FC<IStartButton> = ({ callback }) => (
  <StyledStartButton onClick={callback}>StartButton</StyledStartButton>
);

export default StartButton;
