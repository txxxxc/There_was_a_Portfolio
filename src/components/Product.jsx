import React from 'react';
import Img from 'gatsby-image';
import Icon from './Icon';
import '../styles/products.scss';


const Product = props => {
  // console.log({props})
  return (
    <>
      <div className="products-content__image">
        <Img
          fluid={props.fluid}
          style={{ height: '100%' }}
        />
        <div className="tags">
          <div className="tags__container">
            {props.product.skills.map(skill => (
              <div className="tags__item">
                <Icon skill={skill.component} width="24px" height="24px" />
                <span className="tags__item-text">{skill.value}</span>
              </div>
            ))}
            <div className="tags__link">More →</div>
          </div>
        </div>
      </div>

      <p className="products-content__header">{props.product.title}</p>
      <p className="products-content__text">{props.product.description}</p>
    </>
  )
};

export default Product;