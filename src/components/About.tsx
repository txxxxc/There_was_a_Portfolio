import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Element } from 'react-scroll';
import InViewMonitor from 'react-inview-monitor';
import Arrow from './Arrow';
import Image from './Image';

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
    <Wrapper>
      <InView>
        <InViewMonitor
          childPropsInView={{ isActive: true }}
          classNameInView="animate__animated animate__fadeInLeft"
        >
          <Container name="about" isActive={false}>
            <AboutContainer>
              <Name>
                田中&nbsp;智也
                <br />
                <Alphabet>Tomoya Tanaka</Alphabet>
              </Name>
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
          </Container>
        </InViewMonitor>
      </InView>
      <Arrow to="skills" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InView = styled.div`
  min-width: 100%;
  height: 80vh;
`;

const Container = styled(Element)<{ isActive: boolean }>`
  display: flex;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  min-width: 100%;
`;

const Name = styled.p`
  font-size: 64px;
  margin-bottom: 32px;
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
