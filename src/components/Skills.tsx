import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Arrow from './Arrow';
import { Wrapper as UtilitiesWrapper, Container, Title } from './Utilities';

interface Content {
  icon?: string;
  name: string;
}

interface ContentsType {
  genre: string;
  contents: Content[];
}

const SkillsContents: ContentsType[] = [
  {
    genre: 'Language',
    contents: [
      {
        icon: 'ruby.svg',
        name: 'Ruby',
      },
      {
        icon: 'javascript.svg',
        name: 'JavaScript',
      },
      {
        icon: 'typescript.svg',
        name: 'TypeScript',
      },
      {
        icon: 'graphql.svg',
        name: 'GraphQL',
      },
    ],
  },
  {
    genre: 'FrameWorks',
    contents: [
      {
        icon: 'rubyonrails.svg',
        name: 'Ruby on Rails',
      },
      {
        icon: 'react.svg',
        name: 'React',
      },
      {
        icon: 'apollo.svg',
        name: 'Apollo',
      },
      {
        name: 'Sinatra',
      },
    ],
  },
  {
    genre: 'Tools',
    contents: [
      {
        icon: 'git.svg',
        name: 'Git',
      },
      {
        icon: 'docker.svg',
        name: 'Docker',
      },
    ],
  },
];

const Skills: React.FC = () => (
  <Wrapper name="skills">
    <Container>
      <Title>Skills</Title>
      {SkillsContents.map(elements => (
        <>
          <Topic>{elements.genre}</Topic>
          <Contents>
            {elements.contents.map(content => (
              <Content>
                {content.icon && (
                  <Icon>
                    <Image filename={content.icon} />
                  </Icon>
                )}
                <Name>{content.name}</Name>
              </Content>
            ))}
          </Contents>
        </>
      ))}
    </Container>
    <Arrow to="internship" />
  </Wrapper>
);

const Wrapper = styled(UtilitiesWrapper)`
  flex-direction: column;
`;

const Topic = styled.p`
  font-size: 4rem;
  padding-top: 50px;
`;

const Contents = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 3.2rem;
  font-weight: 400;
`;

const Content = styled.div`
  padding-top: 2rem;
`;

const Icon = styled.span`
  padding-right: 1rem;
  vertical-align: middle;
`;

const Name = styled.span`
  padding-right: 2rem;
`;

export default Skills;
