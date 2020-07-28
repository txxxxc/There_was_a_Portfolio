import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import InViewMonitor from 'react-inview-monitor';
import Arrow from './Arrow';
import { Wrapper, Container, Title } from './Utilities';

type ChildImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

type Data = {
  profile: ChildImage;
};

const About: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query Profile {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper name="about">
      <Container>
        <InViewMonitor
          childPropsInView={{ isActive: true }}
          classNameInView="animate__animated animate__fadeInLeft"
        >
          <InView isActive={false}>
            <AboutContainer>
              <Title>
                田中&nbsp;智也
                <br />
                <Alphabet>Tomoya Tanaka</Alphabet>
              </Title>
              <Description>
                2001年、大阪府箕面市生まれ。19歳。
                <br />
                関西学院大学総合政策学部出身。
                <br />
                現在はLife is Tech!で中高生にプログラミングを教えています。
                <br />
                普段はよくTypeScript, React, GraphQLを書いてます。
                <br />
                漫画、麻雀、ゲーム、お笑いが好きです。
              </Description>
            </AboutContainer>
            <ImageContainer>
              <ProfileImg fluid={data.profile.childImageSharp.fluid} />
            </ImageContainer>
          </InView>
        </InViewMonitor>
      </Container>
      <Arrow to="skills" />
    </Wrapper>
  );
};

const InView = styled.div<{ isActive: boolean }>`
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  min-width: 100%;
`;

const AboutContainer = styled.div`
  width: 55%;
`;

const ImageContainer = styled.div`
  width: 45%;
`;

const Alphabet = styled.span`
  font-size: 4rem;
  font-weight: 200;
`;

const Description = styled.div`
  font-size: 24px;
  color: #d2d2d2;
  padding-right: 4rem;
  line-height: 150%;
`;
const ProfileImg = styled(Img)``;
export default About;
