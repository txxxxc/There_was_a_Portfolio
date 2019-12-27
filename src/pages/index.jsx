import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills';
import Products from '../components/Products';
import Contact from '../components/Contact';
import '../styles/reset.css'
import '../styles/global.scss'

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }

export default () => {
  const data = useStaticQuery(graphql`
    query Hoge {
      home: file(relativePath: { eq: "home-background.png" }) {
        childImageSharp {
          fluid {
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
      <Header />

      <BackgroundImage
        Tag="div"
        className="test1"
        fluid={homeImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <Home />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test2"
        fluid={aboutImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <About />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test1"
        fluid={skillsImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <Skills />
      </BackgroundImage>

      <BackgroundImage
        Tag="div"
        className="test2"
        fluid={productsImageData}
        backgroundColor={`rgba(0,0,0,0.8)`}
      >
        <Products />
      </BackgroundImage>
      
      <Contact />
    </div>
  )}
