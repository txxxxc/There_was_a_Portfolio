import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import '../styles/products.scss';


const Products = () => {
  const data = useStaticQuery(graphql`
    query Products {
      file(relativePath: { eq: "subject-simulator.png" }) {
        childImageSharp {
          fixed(width: 500, height: 300) {
            src
            originalName
          }
        }
      }
    }
  `)
  console.log({data})
  return (
    <div className="products">
      <p className="products__header">Products</p>
      <div className="products-container">
        <div className="products-container__item">
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <div className="products-container__item"></div>
      </div>
    </div>
  ) 
}
export default Products;

export const query = graphql`
        query {
          file(relativePath: { eq: "subject-simulator.png" }) {
            childImageSharp {
              fixed(width: 500, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `