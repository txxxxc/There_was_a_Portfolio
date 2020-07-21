import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

type Props = {
  filename: string;
};

type ChildImage = {
  node: {
    relativePath: string;
    name: string;
    childImageSharp: {
      fixed: FixedObject;
    };
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
              fixed(width: 24) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  // eslint-disable-next-line max-len
  // eslint-disable-next-line prettier/prettier
  const image: ChildImage | undefined = allImages.images.edges.find(n => n.node.relativePath.includes(filename));

  const fixedImage: FixedObject = image.node.childImageSharp.fixed;
  return <Img fixed={fixedImage} />;
};

export default Image;
