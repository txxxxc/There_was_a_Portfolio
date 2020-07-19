import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <p>
        Welcome to my
        <br />
        <Span>Portfolio</Span>
      </p>
      <Arrow to="about" />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 8.1rem;
  font-weight: bold;
  flex-direction: column;
  line-height: 2;
`;

const Span = styled.span`
  color: #c91c70;
`;

export default Home;
