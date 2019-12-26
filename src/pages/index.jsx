import React from 'react'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills';
import Products from '../components/Products';
import '../styles/reset.css'
import '../styles/global.scss'

export default () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="content">
        <Home />
      </div>
    </div>
    <div className="about-container">
      <div className="content">
        <About />
      </div>
    </div>
    <div className="skills-container">
      <div className="content">
        <Skills />
      </div>
    </div>
    <div className="products-container">
      <div className="content">
        <Products />
      </div>
    </div>
  </div>
)
