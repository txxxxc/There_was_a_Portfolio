import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Arrow from './Arrow';
import { Wrapper, Container, Title } from './Utilities';

const Products: React.FC = () => (
  <Wrapper name="products">
    <Container>
      <Title>Products</Title>
      <Contents>
        <Product>
          <Image filename="subject-simulator.png" />
          <ProductTitle>時間割シミュレーター</ProductTitle>
          <ProductDescription>
            自分が通っていた高校用に作った時間割のシミュレーターです。
          </ProductDescription>
        </Product>
        <Product>
          <Image filename="camp_helper.png" />
          <ProductTitle>キャンプヘルパー</ProductTitle>
          <ProductDescription>
            キャンプでの問題を解消するためのアプリです。
          </ProductDescription>
        </Product>
      </Contents>
    </Container>
    <Arrow to="contact" />
  </Wrapper>
);

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Product = styled.div`
  width: 45%;
`;

const ProductTitle = styled.p`
  font-size: 3.6rem;
  padding-top: 3rem;
`;

const ProductDescription = styled.p`
  font-size: 2.4rem;
  padding-top: 1rem;
  color: #d2d2d2;
`;

export default Products;
