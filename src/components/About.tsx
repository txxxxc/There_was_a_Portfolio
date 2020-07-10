import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

// const items: { id: number; topic: string; content: string } = [
//   { id: 1, topic: 'Age', content: '18' },
//   { id: 2, topic: 'From', content: 'Osaka' },
//   { id: 3, topic: 'Job', content: 'Front-end-developer' },
// ];

// const data = graphql`
//   query Profile {
//     file(relativePath: { eq: "icon.jpg" }) {
//       childImageSharp {
//         fluid {
//           sizes
//           src
//           aspectRatio
//           base64
//           srcSet
//         }
//       }
//     }
//   }
// `;

// console.log({ data });

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
  console.log({ data });
  return (
    <Wrapper>
      <AboutContainer>
        <Title>
          <span>About Me</span>
        </Title>
        <Commands>
          <Command>$ tt --from</Command>
          <Output>Osaka</Output>
          <Command>$ tt --age</Command>
          <Output>18</Output>
          <Command>$ tt --university</Command>
          <Output>Kwansei Gakuin univ.</Output>
        </Commands>
      </AboutContainer>
      <ImageContainer>
        <ProfileImg fluid={data.profile.childImageSharp.fluid} />
        <Description>
          田中智也(たなかともや、2001年(平成13年)7月4日)は
          <br />
          大阪府箕面市出身の大学生。
          <br />
          中学生の頃からものづくりの楽しさに触れ、
          <br />
          現在はLife is Tech!でメンターとして
          <br />
          中高生にものづくりの楽しさを教えている。
        </Description>
      </ImageContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  height: 80vh;
`;

const Title = styled.p`
  font-size: 64px;
  margin-bottom: 32px;
`;

const AboutContainer = styled.div`
  width: 55%;
`;

const Commands = styled.div`
  font-family: Monaco;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 45%;
`;

const Command = styled.p`
  color: #2ec91c;
  font-size: 48px;
  padding-top: 4rem;
`;

const Output = styled.p`
  color: #fafafa;
  font-size: 48px;
  padding-top: 2rem;
`;

const typing = keyframes`
  0% { width: 0; }
  100% { width: 8ch; }
`;

const ProfileImg = styled(Img)`
  &:hover {
    &:before {
      position: absolute;
      content: '';
      display: block;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Description = styled.div`
  font: bold 2em Consolas, Monaco, monospace;
  position: absolute;
  margin: 2rem;
  font-size: 3.2rem;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
  z-index: 101;
  font-size:20px;
  /* ${ImageContainer}:hover & {
    animation: ${typing} 2s steps(4);
  } */
`;

export default About;
