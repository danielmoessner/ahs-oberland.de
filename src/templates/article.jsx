import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Seo from '../components/Seo';

function Page({ data }) {
  const article = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };

  const meta = {
    title: article.title,
    description: article.description,
    image: article.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Section noPadding>
        <div className="pt-10 pb-12 lg:pt-12 lg:pb-20">
          <div className="mb-10">
            <Link className="text-base font-medium" to="/aktuelles/">
              &larr;&nbsp;Zurück zu allen Artikeln
            </Link>
          </div>
          <div className="flex justify-between space-x-10">
            <article className="text-base max-w-prose">
              <h2 className="text-3xl max-w-prose leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {article.title}
              </h2>
              <p className="mt-8 text-lg text-gray-500 max-w-prose">{article.description}</p>
              <div
                className="mt-5 prose prose-indigo text-gray-500"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: article.html }}
              />
            </article>
            <div className="flex-1">
              <div className="sticky top-10">
                <GatsbyImage
                  className=""
                  image={article.image.childImageSharp.gatsbyImageData}
                  alt={article.title}
                />
              </div>
            </div>
          </div>
        </div>
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
      ...article
    }
  }
`;
