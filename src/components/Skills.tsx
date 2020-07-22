import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Image from './Image';
import Arrow from './Arrow';

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
        name: 'Sinatra',
      },
      {
        icon: 'react.svg',
        name: 'React',
      },
      {
        icon: 'apollographql.svg',
        name: 'Apollo',
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
      <Header>Skills</Header>
      {SkillsContents.map(elements => (
        <>
          <Topic>{elements.genre}</Topic>
          <Contents>
            {elements.contents.map(content => (
              <>
                {content.icon && (
                  <Icon>
                    <Image filename={content.icon} />
                  </Icon>
                )}
                <Name>{content.name}</Name>
              </>
            ))}
          </Contents>
        </>
      ))}
    </Container>
    <Arrow to="contact" />
  </Wrapper>
);

const Wrapper = styled(Element)`
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 80vh;
`;

const Topic = styled.p`
  font-size: 4rem;
  padding-top: 50px;
`;

const Contents = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  padding-top: 2rem;
`;

const Icon = styled.span`
  padding-right: 1rem;
`;

const Name = styled.span`
  padding-right: 2rem;
`;

const Header = styled.p`
  font-size: 6.4rem;
  font-weight: 400;
`;

export default Skills;
