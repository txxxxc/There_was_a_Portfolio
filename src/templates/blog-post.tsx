import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { TemplateQuery } from '../../types/graphql-types.d';

interface IProps {
  data: TemplateQuery;
}

export default function Template({ data }: IProps): React.ReactElement {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet title={`Your Blog Name - ${post?.frontmatter?.title}`} />
        <div className="blog-post">
          <h1>{post?.frontmatter?.title}</h1>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post?.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query Template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        date(formatString: "MMMM DD, YYYY")
        thumbnail
      }
    }
  }
`;
