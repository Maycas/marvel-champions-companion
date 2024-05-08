import styled from 'styled-components';

export const Container = styled.section<{ direction?: 'column' | 'row' }>`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: 10px;

  @media (orientation: landscape) {
    & {
      flex-direction: row;
    }
  }

  @media (orientation: portrait) {
    & {
      flex-direction: column;
    }
  }
`;

export default Container;
