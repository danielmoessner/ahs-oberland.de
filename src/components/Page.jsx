// // import { graphql } from 'gatsby';
// import React from 'react';
// // import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// // import { Transition } from '@headlessui/react';
// // import Container from '../components/Container';
// import Layout from './Layout';
// import Seo from './Seo';

// function Page({ data }) {
//   const page = data.pagesYaml;
//   return (
//     <Layout>
//       <Seo
//         title={page.meta.title}
//         description={page.meta.description}
//         image={page.meta.image.childImageSharp.resize.src}
//       />
//       <div>{page.meta.title}</div>
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
//   {
//     pagesYaml(slug: { eq: "styleguide" }) {
//       ...meta
//     }
//   }
// `;
