import React from 'react';
import { StyledSelfScores, StyledRanking } from './styles/StyledScores';

interface IDisplay {
  score: number;
  selfBest: number;
}

const Display: React.FC<IDisplay> = ({ score, selfBest }) => (
  <>
    <StyledSelfScores>
      <h3>Scores</h3>
      <li>This game:{score}</li>
      <li>Your Best:{selfBest}</li>
    </StyledSelfScores>
    <StyledRanking>
      <h3>Ranking</h3>
      <div>
        <dl>
          <dt>1st</dt>
          <dd className="name">asami</dd>
          <dd className="score">1000000</dd>
        </dl>
        <dl>
          <dt>2nd</dt>
          <dd className="name">asami</dd>
          <dd className="score">{score}</dd>
        </dl>
        <dl>
          <dt>3rd</dt>
          <dd>nagainamaenohito</dd>
          <dd>{score}</dd>
        </dl>
        <dl>
          <dt>10th</dt>
          <dd>asami</dd>
          <dd>{score}</dd>
        </dl>
        <dl>
          <dt>11th</dt>
          <dd>123456789012</dd>
          <dd>1000000</dd>
        </dl>
      </div>
    </StyledRanking>
  </>
);

export default Display;
