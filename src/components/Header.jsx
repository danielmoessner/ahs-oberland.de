import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';
import Heading from './Heading';
import ImageData from '../types/ImageData';

function Component({ header }) {
  return (
    <header>
      <Container>
        <div className="bg-white border-b border-gray-100">
          <div className="relative overflow-hidden">
            <GatsbyImage image={header.image.childImageSharp.gatsbyImageData} alt={header.title} />
            <div className="absolute px-8 pb-6 pt-8 bg-white top-16 left-20 bg-opacity-80 md:max-w-2xl">
              <Heading>{header.title}</Heading>
              <p className="mt-3 mx-auto text-lg text-gray-600 sm:text-xl md:mt-5">{header.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: ImageData,
  }).isRequired,
};

export default Component;

export const headerFragment = graphql`
  fragment header on PageYaml {
    header {
      title
      text
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  fragment headerMarkdown on MarkdownRemarkFrontmatter {
    header {
      title
      text
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
