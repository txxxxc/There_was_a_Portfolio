import styled from 'styled-components';
import { Element } from 'react-scroll';

export const Wrapper = styled(Element)`
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 80vh;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 6.4rem;
  font-weight: 400;
  padding-bottom: 4rem;
`;
