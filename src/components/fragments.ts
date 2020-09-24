import { graphql } from 'gatsby';

export const getFluidImage = graphql`
  fragment getFluidImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const getFixedImage = graphql`
  fragment getFixedImage on File {
    childImageSharp {
      fixed(width: 1920) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const getSVGImage = graphql`
  fragment getSVGImage on File {
    publicURL
    extension
  }
`;
