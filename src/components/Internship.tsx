import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import { Wrapper, Container, Title } from './Utilities';

const Internship: React.FC = () => (
  <Wrapper name="internship">
    <Container>
      <Title>Internship</Title>
      <Contents>
        <Content>
          <Topic href="https://life-is-tech.com/">Life is Tech!</Topic>
          <Description>
            Web Service Programming Course Mentor(2020/07~)
          </Description>
        </Content>
        <Content>
          <Topic>Now</Topic>
        </Content>
      </Contents>
    </Container>
    <Arrow to="products" />
  </Wrapper>
);

const circleDiameter = 4;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 5rem;
  height: 80%;

  &::before {
    content: '';
    /* 幅と色 */
    background-color: #c91c70;
    width: 2px;
    /* 位置 */
    position: absolute;
    top: ${circleDiameter / 2}rem; /* 円のwidthの半分 */
    left: ${circleDiameter / 2}rem; /* 円のwidthの半分 */
    height: calc(100% - ${circleDiameter / 2}rem); /* 100% - top */
    /* 連番より後ろに表示するため */
    z-index: 0;
  }
`;

const Content = styled.div`
  font-weight: 200;
  &:nth-child(1) {
    flex-grow: 1;
  }
`;

const Topic = styled.a`
  font-size: 4.8rem;
  text-decoration: none;
  color: #fafafa;

  &:hover {
    cursor: pointer;
  }

  &:active {
  }

  &::before {
    content: '';
    background: #c91c70;
    line-height: ${circleDiameter}rem;
    /* 円で表示する */
    width: ${circleDiameter}rem;
    height: ${circleDiameter}rem;
    border-radius: ${circleDiameter}rem;
    /* .stepsでmargin-left +2rem したぶん左に戻す */
    position: absolute;
    left: 0;
  }
`;

const Description = styled.p`
  font-size: 3.2rem;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #d2d2d2;
`;
export default Internship;
