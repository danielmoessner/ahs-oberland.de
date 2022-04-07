// import { graphql } from 'gatsby';
// import React from 'react';
// import Layout from '../components/Layout';
// import Seo from '../components/Seo';

// function Page({ data }) {
//   const job = data.markdownRemark;
//   const meta = {
//     title: job.title,
//     description: job.title,
//   };

//   return (
//     <Layout>
//       <Seo meta={meta} />
//       <div>{job.title}</div>
//     </Layout>
//   );
// }

// Page.defaultProps = {};

// Page.propTypes = {
//   // eslint-disable-next-line
//   data: PropTypes.object.isRequired,
// };

// export default Page;

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       id
//       ...job
//     }
//   }
// `;
