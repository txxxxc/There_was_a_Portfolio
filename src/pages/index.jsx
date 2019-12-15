import React from 'react'
import Layout from '../layouts/layout'
import baseStyle from '../styles/base-style'
import styled from 'styled-components'

const Index = () => (
  <div>
    <h1>Gatsby Starter hpp</h1>
  </div>
)

const StyledIndex = styled(Index)`
  ${baseStyle};
`

export default () => (
  <Layout>
    <StyledIndex />
  </Layout>
)
