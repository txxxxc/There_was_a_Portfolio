import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Arrow from './Arrow';

const Internship: React.FC = () => (
  <Wrapper name="internship">
    <Container>
      <Title>Internship</Title>
      <Content>
        <Topic>Life is Tech!</Topic>
        <Description>Web Service Programming Course Mentor</Description>
        <Topic>Now</Topic>
        <Description />
      </Content>
    </Container>
    <Arrow to="products" />
  </Wrapper>
);

const Wrapper = styled(Element)`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

const Title = styled.div`
  font-size: 64px;
  padding-bottom: 4rem;
`;

const hoge = '3.5rem';
const piyo = '1.75rem';
const Content = styled.div`
  position: relative;
  padding-left: 3.5rem;

  &::before {
    content: '';
    /* 幅と色 */
    background-color: #d59533;
    width: 2px;
    /* 位置 */
    position: absolute;
    top: ${piyo}; /* 円のwidthの半分 */
    left: ${piyo}; /* 円のwidthの半分 */
    height: calc(100% - ${piyo}); /* 100% - top */
    /* 連番より後ろに表示するため */
    z-index: 0;
  }
`;

const Topic = styled.h2`
  font-size: 4.8rem;
  padding-bottom: 20px;
  font-weight: 400;

  &::before {
    content: '';
    background: #d59533;
    /* 文字を中央に表示する */
    line-height: ${hoge};
    text-align: center;
    /* 円で表示する */
    width: ${hoge};
    height: ${hoge};
    border-radius: ${hoge};
    /* .stepsでmargin-left +2rem したぶん左に戻す */
    position: absolute;
    left: 0;
  }
`;

const Description = styled.p`
  font-size: 3.2rem;
  padding-top: 20px;
  color: #d2d2d2;
`;
export default Internship;
