import React from 'react';
import Github from '../svg/github'
import '../styles/home.scss';
        

const Home = () => (
  <div className="home">
    <main className="home-container" id="home">
      <div className="home-content">
        <div className="home-content__icon"></div>
        <p className="home-content__typography">Tomoya Tanaka</p>
        <a
          href="https://github.com/Tanaka-Tomoya"
          className="home-content__sns"
        >
          <Github width="100px" height="120px" />
        </a>
      </div>
    </main>
  </div>
)

export default Home;