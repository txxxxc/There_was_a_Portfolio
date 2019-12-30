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
      <div className="products-container">
        <p className="products__header">Products</p>
        <div className="products-content">
          <div className="products-content__item">

            <div className="products-content__image">
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
                  <div className="tags__link">More →</div>
                </div>
              </div>
            </div>

            <p className="products-content__header">
              時間割シミュレーター
            </p>
            <p className="products-content__text">
              単位制の母校の為に作った生徒が履修する
              授業を計画できるアプリです。
            </p>

          </div>

          <div className="products-container__item"></div>

        </div>
      </div>
    </div>
  ) 
}
export default Products;