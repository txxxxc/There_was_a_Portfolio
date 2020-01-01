import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Icon from '../img/skills-background.jpg';
import '../styles/reset.css'
import '../styles/global.scss'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

export default () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
      window.addEventListener('resize', handleResize)
  })
  return (
    <div className="wrapper">
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
      <Header size={dimensions.width} />
      <Home />
      <About />
      <Skills />
      <Products />
      <Contact />
    </div>
  )}
