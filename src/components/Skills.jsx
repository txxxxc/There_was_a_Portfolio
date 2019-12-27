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
    additionalItems.push(<div className="skills__items-container--item" key={skills.length + 1} ></div>)
  }
return (
  <div className="skills" id="skills">
    <p className="skills__title">Skills</p>
    <div className="skills__items-container">
      {skills.map((skill, i) => {
        const Tag = components[skill].component
        console.log({Tag})
        return (
          <div className="skills__items-container--item" key={i}>
            <Tag width="160px" height="160px" />
            <p className="skills__items-container--text">{components[skill].value}</p>
          </div>
        )})}
      {additionalItems}
    </div>
  </div>
)}

export default Skills;
