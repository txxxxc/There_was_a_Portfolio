import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

type Props = {
  filename: string;
};

type ChildImage = {
  node: {
    relativePath: string;
    name: string;
    childImageSharp: {
      fluid: FluidObject;
    };
    extension: string;
    publicURL: string;
  };
};

type ImageType = {
  edges: ChildImage[];
};

type Data = {
  images: ImageType;
};

const Image: React.FC<Props> = ({ filename }) => {
  const allImages = useStaticQuery<Data>(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `);
  // eslint-disable-next-line max-len
  // eslint-disable-next-line prettier/prettier
  const image: ChildImage = allImages.images.edges.find(n => n.node.relativePath.includes(filename));
  const { childImageSharp, publicURL } = image?.node;

  if (!childImageSharp && image.node.extension === 'svg') {
    return <img src={publicURL} width="32px" height="32px" />;
  }
  const fluidImage: FluidObject = image.node.childImageSharp.fluid;
  return <Img fluid={fluidImage} />;
};

export default Image;
