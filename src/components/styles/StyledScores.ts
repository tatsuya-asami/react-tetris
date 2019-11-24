import styled from 'styled-components';
import { StyledDisplay } from './StyledDisplay';

export const StyledSelfScores = styled(StyledDisplay.withComponent('ul'))`
  display: block;
  list-style: none;
  margin-top: 1em;
  padding: 1em;
  h3 {
    margin: 0;
    color: blue;
  }
  li {
    margin: 1em 0.5em;
    text-align: left;
    & + li {
      margin: 0.5em;
    }
  }
`;
export const StyledRanking = styled(StyledDisplay)`
  display: block;
  /* list-style: none; */
  margin-top: 1em;
  padding: 1em 0.3em;
  h3 {
    margin: 0;
    color: yellow;
  }
  dl {
    display: grid;
    grid-template-rows: 1em 1em;
    grid-template-columns: 35px 1fr;
    grid-row-gap: 0.5em;
    grid-column-gap: 1em;

    dt {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
      text-align: right;
    }

    dd {
      margin: 0;
      text-align: left;

      & .name {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }

      & .score {
        grid-row: 2 / 2;
        grid-column: 2 / 3;
        margin: 0.5em 0 0 0;
      }
    }
  }
`;
