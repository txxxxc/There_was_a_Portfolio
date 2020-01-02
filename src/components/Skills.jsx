import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import Icon from './Icon';
import GraphQL from '../svg/graphql';
import _React from '../svg/react';
import JavaScript from '../svg/javascript';
import TypeScript from '../svg/typescript';
import Nodejs from '../svg/node'
import Sass from '../svg/sass'

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
  sass: {
    component: Sass,
    value: 'Sass'
  }
}

const skills = [
  'javascript',
  'typescript',
  'graphql',
  'react',
  'nodejs',
  'sass'
]

const Skills = () => {
  const data = useStaticQuery(graphql`
    query Skills {
      file(relativePath: { eq: "skills-background.jpg" }) {
        childImageSharp {
          fluid {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
    }
  `)
  const additionalItems = [];
  for(let i = 0; i < skills.length % 3 - 1; i++) {
    additionalItems.push(
      <div className="skill-list__container--none" key={skills.length + 1}></div>
    )
  }
  const imageData = data.file.childImageSharp.fluid;
return (
  <BackgroundImage
    Tag="div"
    className="test"
    fluid={imageData}
    backgroundColor={`rgba(0,0,0,0.8)`}
  >
    <div className="skills" id="skills">
      <div className="skills-container">
        <p className="skills-container__title">Skills</p>
        <div className="skill-list">
          {skills.map((skill, i) => {
            return (
              <div className="skill-list__container" key={i}>
                <Icon
                  skill={skill} className="skill-list__tag" width="120px" height="120px"
                />
                <p className="skill-list__text">{components[skill].value}</p>
              </div>
            )
          })}
          {additionalItems}
        </div>
      </div>
    </div>
  </BackgroundImage>
)}

export default Skills;
