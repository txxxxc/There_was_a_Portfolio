import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Image from './Image';

interface Content {
  icon: string;
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
        icon: 'ruby.png',
        name: 'Ruby',
      },
      {
        icon: 'javascript.png',
        name: 'JavaScript',
      },
      {
        icon: 'typescript.png',
        name: 'TypeScript',
      },
      {
        icon: 'icon_graphql.png',
        name: 'GraphQL',
      },
    ],
  },
  {
    genre: 'FrameWorks',
    contents: [
      {
        icon: 'rubyonrails.png',
        name: 'Ruby on Rails',
      },
      {
        icon: 'react.png',
        name: 'React',
      },
      {
        icon: 'apollographql.png',
        name: 'Apollo',
      },
    ],
  },
  {
    genre: 'Tools',
    contents: [
      {
        icon: 'git.png',
        name: 'Git',
      },
      {
        icon: 'docker.png',
        name: 'Docker',
      },
    ],
  },
];

console.log(SkillsContents);

const Skills: React.FC = () => (
  <Wrapper name="skills">
    <Header>Skills</Header>
    <Container>
      {SkillsContents.map(elements => (
        <>
          <Topic>{elements.genre}</Topic>
          <Contents>
            {elements.contents.map(content => (
              <>
                <Icon>
                  <Image filename={content.icon} />
                </Icon>
                <Name>{content.name}</Name>
              </>
            ))}
          </Contents>
        </>
      ))}
    </Container>
  </Wrapper>
);

const Wrapper = styled(Element)`
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 80vh;
`;

const Topic = styled.p`
  font-size: 4rem;
  padding-top: 3rem;
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
