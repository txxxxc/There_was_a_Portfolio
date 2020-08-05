import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from './Image';
import Arrow from './Arrow';
import { Wrapper, Container, Title } from './Utilities';
import { ProductsQuery } from '../../types/graphql-types.d';

interface Data {
  data: ProductsQuery;
}
const Products: React.FC = () => {
  const allPosts = useStaticQuery<Data>(graphql`
    query Products {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              path
              description
              thumbnail
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);
  console.log(allPosts);
  const { edges: posts } = allPosts.allMarkdownRemark;
  return (
    <Wrapper name="products">
      <Container>
        <Title>Products</Title>
        <Contents>
          {posts
            .filter(post => post?.node?.frontmatter?.title?.length > 0)
            .map(({ node: post }) => (
              <Product to={post.frontmatter?.path}>
                <Image filename={post.frontmatter?.thumbnail} />
                <ProductTitle>{post.frontmatter?.title}</ProductTitle>
                <ProductDescription>{post.excerpt}</ProductDescription>
              </Product>
            ))}
        </Contents>
      </Container>
      <Arrow to="contact" />
    </Wrapper>
  );
};

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Product = styled(Link)`
  width: 45%;
`;

const ProductTitle = styled.p`
  font-size: 3.6rem;
  padding-top: 3rem;
`;

const ProductDescription = styled.p`
  font-size: 2.4rem;
  padding-top: 1rem;
  color: #d2d2d2;
`;

export default Products;
