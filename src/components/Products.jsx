import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactIcon from '../svg/react';
import GraphQL from '../svg/graphql';
import TypeScript from '../svg/typescript';
import Img from 'gatsby-image';
import '../styles/products.scss';


const Products = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(
        relativePath: { eq: "subject-simulator.png" }
      ) {
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
  console.log({data})
  return (
    <div className="products" id="products">
      <p className="products__header">Products</p>
      <div className="products-container">
        <div className="products-container__item">
          <div className="products-container__item--image">
            <Img fluid={data.file.childImageSharp.fluid} />

            <div className="tags">
              <div className="tags__container">
                <div className="tags__item">
                  <ReactIcon width="24px" height="24px" />
                  <span className="tags__item-text">React</span>
                </div>
                <div className="tags__item">
                  <GraphQL width="24px" height="24px" />
                  <span className="tags__item-text">GraphQL</span>
                </div>
                <div className="tags__item">
                  <TypeScript width="24px" height="24px" />
                  <span className="tags__item-text">TypeScript</span>
                </div>
              </div>
            </div>
          </div>

          <p className="products-container__item--header">
            時間割シミュレーター
          </p>
          <p className="products-container__item--text">
            hogehogehogehogehogehgehgoehgoehgoehogheohgoehgoehgoehoghe
          </p>
        </div>
        <div className="products-container__item"></div>
      </div>
    </div>
  ) 
}
export default Products;

// export const query = graphql`
//         query {
//           file(relativePath: { eq: "subject-simulator.png" }) {
//             childImageSharp {
//               fixed(width: 500, height: 300) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       `