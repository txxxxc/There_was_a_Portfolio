import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Element } from 'react-scroll';
import InViewMonitor from 'react-inview-monitor';

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
    <InViewMonitor
      childPropsInView={{ isActive: true }}
      classNameInView="animate__animated animate__fadeInLeft"
    >
      <Wrapper isActive={false}>
        <Container name="about">
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
      </Wrapper>
    </InViewMonitor>
  );
};

const Wrapper = styled.div<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

const Container = styled(Element)`
  display: flex;
  height: 80vh;
`;

const Name = styled.p`
  font-size: 64px;
  margin-bottom: 32px;
`;

const AboutContainer = styled.div`
  width: 55%;
`;

const ImageContainer = styled.div`
  position: relative;
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
