import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

type Props = {
  to: string;
};

const Arrow: React.FC<Props> = ({ to }) => (
  <Container to={to} spy smooth duration={500} />
);

const Container = styled(Link)`
  position: absolute;
  bottom: 10%;
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: transparent transparent #fafafa #fafafa;
  transform: rotate(-45deg);
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Arrow;
