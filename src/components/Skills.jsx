import React from 'react';
import GraphQL from '../svg/graphql';
import _React from '../svg/react';
import JavaScript from '../svg/javascript';
import TypeScript from '../svg/typescript';
import Nodejs from '../svg/node'

import '../styles/skills.scss'
const components = {
  javascript: {
    component: JavaScript,
    value: 'JavaScript',
  },

  typescript: {
    component: TypeScript,
    value: 'TypeScript',
  },
  graphql: {
    component: GraphQL,
    value: 'GraphQL',
  },
  react: {
    component: _React,
    value: 'React'
  },
  nodejs: {
    component: Nodejs,
    value: 'Node.js'
  },
}

const skills = [
  'javascript',
  'typescript',
  'graphql',
  'react',
  'nodejs',
]

const Skills = () => {
  const additionalItems = [];
  for(let i = 0; i < skills.length % 3 - 1; i++) {
    additionalItems.push(
      <div className="skill-list__container" key={skills.length + 1}></div>
    )
  }
return (
  <div className="skills" id="skills">
    <div className="skills-container">
      <p className="skills-container__title">Skills</p>
      <div className="skill-list">
        {skills.map((skill, i) => {
          const Tag = components[skill].component
          console.log({ Tag })
          return (
            <div className="skill-list__container" key={i}>
              <Tag width="160px" height="160px" />
              <p className="skill-list__text">
                {components[skill].value}
              </p>
            </div>
          )
        })}
        {additionalItems}
      </div>
    </div>
  </div>
)}

export default Skills;
