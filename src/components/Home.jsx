import React from 'react';
import Github from '../svg/github'
import '../styles/home.scss'

const Home = () => (
  <main className="home">
    <div className="home-content">
      <div className="home-content__icon"></div>
      <p className="home-content__typography">Tomoya Tanaka</p>
      <a href="https://github.com/Tanaka-Tomoya" className="home-content__sns">
        <Github width="100px" height="120px"/>
      </a>
    </div>
  </main>
)

export default Home;