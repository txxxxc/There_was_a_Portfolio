import React from 'react';
import '../styles/about.scss';

const items = [
  {topic: 'Age', content: '18'},
  {topic: 'From', content: 'Osaka'},
  {topic: 'Job', content: 'Front-end-developer'},
]

const About = () => (
  <div className="about-container">
    <div className="content">
      <div className="about" id="about">
        <p className="about__title">About</p>
        <div className="about__item-container">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div className="about__item-container--topic" key={`topic${i}`}>
                {item.topic}
              </div>
              <div
                className="about__item-container--content"
                key={`content${i}`}
              >
                {item.content}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default About;