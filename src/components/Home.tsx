import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import Github from '../svg/github';
import '../styles/home.scss';

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Home {
      file(relativePath: { eq: "home-background.png" }) {
        childImageSharp {
          fluid(background: "rgba(0,0,0,.6)") {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
    }
  `);
  const imageData = data.file.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="div"
      className="test"
      fluid={imageData}
      backgroundColor="#040e18"
    >
      <div className="home">
        <main className="home-container" id="home">
          <div className="home-content__icon" />
          <p className="home-content__typography">Tomoya Tanaka</p>
          <a
            href="https://github.com/Tanaka-Tomoya"
            className="home-content__sns"
          >
            <Github width="100px" height="120px" />
          </a>
        </main>
      </div>
    </BackgroundImage>
  );
};

export default Home;
