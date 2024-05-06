import styled from 'styled-components';

export const Container = styled.section<{ direction?: 'column' | 'row' }>`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export default Container;
