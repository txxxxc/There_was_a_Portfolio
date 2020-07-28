import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { Wrapper, Container, Title } from './Utilities';

interface Content {
  name: string;
  icon: string;
  link: string;
}

const contactContents: Content[] = [
  {
    name: 'Gmail',
    icon: 'gmail.svg',
    link: 'https://mail.google.com/mail/?view=cm&to=tomoya113.code@gmail.com',
  },
  {
    name: 'Github',
    icon: 'github.svg',
    link: 'https://github.com/Tanaka-Tomoya',
  },
  {
    name: 'Qiita',
    icon: 'qiita.svg',
    link: 'https://qiita.com/tt-lit',
  },
];

const Contact: React.FC = () => (
  <Wrapper name="contact">
    <Container>
      <Title>Contact Me!</Title>
      <Contents>
        {contactContents.map(element => (
          <Content href={element.link}>
            <Icon>
              <Image filename={element.icon} />
            </Icon>
            <Name>{element.name}</Name>
          </Content>
        ))}
      </Contents>
    </Container>
  </Wrapper>
);

const Contents = styled.div`
  font-size: 36px;
`;

const Content = styled.a`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  color: #d2d2d2;
`;

const Icon = styled.span`
  padding-right: 1rem;
  vertical-align: middle;
`;

const Name = styled.span`
  padding-right: 2rem;
`;

export default Contact;
