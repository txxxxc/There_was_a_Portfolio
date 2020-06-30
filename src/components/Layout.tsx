/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
// import { useStaticQuery, graphql } from 'gatsby';
import breakpoints from '../utils/breakpoints';
// import Header from './header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    {/* <Header siteTitle={metaData.site.siteMetadata.title} /> */}
    <Container className="sample">{children}</Container>
    <footer />
  </>
);

const Container = styled.main`
  margin: 0 auto;
  color: #fafafa;
  @media ${breakpoints.mobile} {
    max-width: 540px;
  }

  @media ${breakpoints.tablet} {
    max-width: 720px;
  }

  @media ${breakpoints.laptop} {
    max-width: 960px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1140px;
  }
`;
export default Layout;
