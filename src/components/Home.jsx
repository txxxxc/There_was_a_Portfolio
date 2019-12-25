import React from 'react';
import Github from '../img/github'
import '../styles/home.scss'

const Home = () => (
  <main className="home">
    <div className="home-content">
      <div className="home-content__icon"></div>
      <p className="home-content__typography">Tomoya Tanaka</p>
      <a href="https://github.com/Tanaka-Tomoya" className="home-content__sns">
        <Github />
      </a>
    </div>
  </main>
)

export default Home;