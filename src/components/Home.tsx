import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

const Home: React.FC = () => {
  const [, setY] = useSpring(() => ({
    y: window.pageYOffset,
    // config: config.molasses,
    config: { duration: 1000 },
  }));
  return (
    <Wrapper>
      <Container>
        <p>
          Welcome to my
          <br />
          <Span>Portfolio</Span>
        </p>
        <ScrollButton
          onClick={() => {
            setY({
              y: window.parent.screen.height,
              from: { y: 0 },
              reset: true,
              onChange: ({ y }) => {
                window.scrollBy(0, y);
              },
            });
          }}
          type="button"
        >
          ↓
        </ScrollButton>
      </Container>
    </Wrapper>
  );
};

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

const ScrollButton = styled.button`
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 6rem;
  color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
`;

export default Home;
