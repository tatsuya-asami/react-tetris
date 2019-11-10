import styled from 'styled-components';
import { ICell } from '../Cell';

interface IStyledCell extends ICell {
  // type: 0 | 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
  color?: string | undefined;
}

export const StyledCell = styled.div<IStyledCell>`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`;
