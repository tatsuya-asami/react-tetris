import styled from 'styled-components';

interface IStyledCell {
  type: string | number;
  color: string;
}

export const StyledCell = styled.div<IStyledCell>`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
`;
