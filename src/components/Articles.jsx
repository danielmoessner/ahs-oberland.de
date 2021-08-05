import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ImageData from '../types/ImageData';
// import { Transition } from '@headlessui/react';
import Heading from './Heading';

function Component({ articles, title }) {
  return (
    <>
      <div className="">
        <Heading element="h2" size="h2">
          {title}
        </Heading>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {articles.map((article) => (
          <div key={article.title} className="flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
              <Link to={`/aktuelles/${article.slug}/`}>
                <GatsbyImage
                  className="h-48 w-full object-cover"
                  image={article.image.childImageSharp.gatsbyImageData}
                  alt={article.title}
                />
              </Link>
            </div>
            <div className="flex-1 bg-white flex flex-col justify-between">
              <div className="flex-1">
                {/* <p className="text-right text-sm hidden font-medium text-indigo-600">
                  <Link to={article.category.to} className="hover:underline">
                    {article.category.name}
                  </Link>
                </p> */}
                <Link to={`/aktuelles/${article.slug}/`} className="block mt-2">
                  <Heading element="h3" size="h3" className="text-xl font-semibold text-gray-900">
                    {article.title}
                  </Heading>
                  <p className="mt-3 text-base text-gray-500">{article.description}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: ImageData,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Component;

export const articleFragment = graphql`
  fragment article on MarkdownRemark {
    frontmatter {
      title
      slug
      description
      image {
        childImageSharp {
          gatsbyImageData
          resize(width: 1200) {
            src
          }
        }
      }
    }
  }
`;
