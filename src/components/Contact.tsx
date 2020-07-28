import React from 'react';
import styled from 'styled-components';
import { Wrapper, Container, Title } from './Utilities';

interface Content {
  icon?: string;
  name: string;
}

const ContactContents: Content[] = [
  {
    icon: 'github.svg',
    name: 'Github',
  },
  {
    icon: 'qiita.svg',
    name: 'Qiita',
  },
];

const Contact: React.FC = () => (
  <Wrapper name="contact">
    <Container>
      <Title>Contact Me!</Title>
      <Contents>
        <Content>
          <Text>tomoya113.code@gmail.com</Text>
        </Content>
      </Contents>
    </Container>
  </Wrapper>
);

const Contents = styled.div`
  font-size: 36px;
  color: #d2d2d2;
`;

const Content = styled.div``;

const Text = styled.p``;

export default Contact;
