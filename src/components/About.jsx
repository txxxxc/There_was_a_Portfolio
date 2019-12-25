import React from 'react';
import '../styles/about.scss';

const items = [
  {topic: 'Age', content: '18'},
  {topic: 'From', content: 'Osaka'},
  {topic: 'Job', content: 'Front-end-developer'},
]

const About = () => (
  <div className="about">
    <p className="about__title">About</p>
    <div className="about__item-container">
      {items.map((item) => (
        <>
          <div className="about__item-container--topic">{item.topic}</div>
          <div className="about__item-container--content">{item.content}</div>
        </>
      ))}
    </div>
  </div>
)

export default About;