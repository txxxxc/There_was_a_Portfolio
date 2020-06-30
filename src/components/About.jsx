import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/about.scss';

const items = [
  { topic: 'Age', content: '18' },
  { topic: 'From', content: 'Osaka' },
  { topic: 'Job', content: 'Front-end-developer' },
];

const About = () => {
  const data = useStaticQuery(graphql`
    query Main {
      about: file(relativePath: { eq: "about-background.jpg" }) {
        childImageSharp {
          fluid {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
    }
  `);
  const imageData = data.about.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="div"
      className="test"
      fluid={imageData}
      backgroundColor="rgba(0,0,0,0.8)"
    >
      <div className="about" id="about">
        <div className="content">
          <div className="about-container">
            <p className="about-container__title">About</p>
            <div className="about-items">
              {items.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="about-items__topic" key={`topic${i}`}>
                    {item.topic}
                  </div>
                  <div className="about-items__content" key={`content${i}`}>
                    {item.content}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default About;
