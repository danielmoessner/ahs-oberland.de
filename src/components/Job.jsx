// import React from 'react';
import { graphql } from 'gatsby';

// function Component() {
//   return <div>job</div>;
// }

// Component.defaultProps = {};

// Component.propTypes = {};

// export default Component;

/* eslint-disable import/prefer-default-export */
export const jobFragment = graphql`
  fragment job on MarkdownRemark {
    frontmatter {
      title
      slug
      description
      file {
        id
        publicURL
      }
    }
  }
`;
