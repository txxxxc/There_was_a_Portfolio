import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Icon from '../img/about-background.jpg';
import '../styles/reset.css'
import '../styles/global.scss'

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }

export default () => {
  console.log(Icon)
  const data = useStaticQuery(graphql`
    query Hoge {
      home: file(relativePath: { eq: "home-background.png" }) {
        childImageSharp {
          fluid(background: "rgba(0,0,0,.6)") {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
      skills: file(relativePath: { eq: "skills-background.jpg" }) {
        childImageSharp {
          fluid {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
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
      products: file(relativePath: { eq: "products-background.jpeg" }) {
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
  `)


  const homeImageData = data.home.childImageSharp.fluid;
  const skillsImageData = data.skills.childImageSharp.fluid;
  const aboutImageData = data.about.childImageSharp.fluid;
  const productsImageData = data.products.childImageSharp.fluid;
  return (
    <div>
      <Helmet
        title="Tomoya Tanaka Portfolio"
        meta={[
          {
            property: 'og:title',
            content: 'Tomoya Tanaka Portfolio',
          },
          {
            property: 'og:description',
            content: 'てぃーてぃーのポートフォリオ',
          },
          {
            property: 'og:image',
            content: `https://tt-portfolio.netlify.com${Icon}`,
          },
          {
            property: 'fb:app_id',
            content: 571105203439775,
          },
        ]}
      />
      <Header />

      <BackgroundImage
        Tag="div"
        className="test"
        fluid={homeImageData}
        backgroundColor={`#040e18`}
      >
        <Home />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test"
        fluid={aboutImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <About />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test"
        fluid={skillsImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <Skills />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test"
        fluid={productsImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <Products />
      </BackgroundImage>

      <Contact />
    </div>
  )}
