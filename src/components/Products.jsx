import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import Product from './Product';
import '../styles/products.scss';

const products = [
  {
    title: '時間割シミュレーター',
    description:
      '単位制の母校の為に作った生徒が履修する授業を計画できるアプリです。',
    image: 'subject-simulator.png',
    skills: [
      {
        component: 'react',
        value: 'React'
      },
      {
        component: 'graphql',
        value: 'GraphQL'
      },
      {
        component: 'typescript',
        value: 'TypeScript'
      }
    ],
    link: 'https://github.com/Tanaka-Tomoya/subject-app-v2',
  },
]


const Products = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      subjectSimulator: file(relativePath: { eq: "subject-simulator.png" }) {
        childImageSharp {
          fluid {
            src
            aspectRatio
            sizes
            srcSet
          }
        }
      }
      products: file(relativePath: { eq: "products-background.jpeg" }) {
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
  const imageData = data.products.childImageSharp.fluid
  // console.log({data})
  return (
    <BackgroundImage
      Tag="div"
      className="test"
      fluid={imageData}
      backgroundColor={`rgba(0,0,0,0.8)`}
    >
      <div className="products" id="products">
        <div className="products-container">
          <p className="products__header">Products</p>
          <div className="products-content">
            <div className="products-content__item">
              {products.map(product => (
                <Product
                  product={product}
                  fluid={data.subjectSimulator.childImageSharp.fluid}
                />
              ))}
            </div>
            <div className="products-container__item"></div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  ) 
}
export default Products;