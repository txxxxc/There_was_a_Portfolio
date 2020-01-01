import React from 'react';
import GraphQL from '../svg/graphql'
import _React from '../svg/react'
import JavaScript from '../svg/javascript'
import TypeScript from '../svg/typescript'
import Nodejs from '../svg/node'

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
    value: 'React',
  },
  nodejs: {
    component: Nodejs,
    value: 'Node.js',
  },
}

const Icon = props => {
  const { skill, ...style } = props;
  const Tag = components[skill].component;
  const { value } = components[skill];
  // console.log(skill, value);
  // console.log({style})
  return (
    <Tag style={{...style}}/>
  )
}

export default Icon;