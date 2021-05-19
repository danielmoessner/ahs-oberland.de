import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Section from '../components/Section';
import Articles from '../components/Articles';

function Page({ data }) {
  const page = data.pageYaml;
  const articles = data.allMarkdownRemark.nodes.map((node) => ({ ...node.frontmatter }));

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <Section>
        <Articles articles={articles} title="Artikel" />
      </Section>
    </Layout>
  );
}

Page.defaultProps = {};

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pageYaml(slug: { eq: "news" }) {
      ...meta
      ...header
    }
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
      nodes {
        ...article
      }
    }
  }
`;
