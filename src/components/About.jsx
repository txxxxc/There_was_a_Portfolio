import React from 'react';
import '../styles/about.scss';

const items = [
  {topic: 'Age', content: '18'},
  {topic: 'From', content: 'Osaka'},
  {topic: 'Job', content: 'Front-end-developer'},
]

const About = () => (
  <div className="about" id="about">
    <div className="content">
      <div className="about-container">
        <p className="about-container__title">About</p>
        <div className="about-items">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <div className="about-items__topic" key={`topic${i}`}>
                {item.topic}
              </div>
              <div className="about-items__content" key={`content${i}`}>
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