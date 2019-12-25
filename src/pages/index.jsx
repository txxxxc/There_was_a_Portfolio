import React from 'react'
import Header from '../components/Header';
import Home from '../components/Home'
import About from '../components/About'
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
  </div>
)
