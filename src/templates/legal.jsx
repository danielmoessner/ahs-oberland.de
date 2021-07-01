import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Section from '../components/Section';

function Page({ data }) {
  const legal = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  const meta = {
    title: legal.title,
    description: '',
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Section>
        <article
          className="prose mx-auto"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: legal.html }}
        />
      </Section>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
