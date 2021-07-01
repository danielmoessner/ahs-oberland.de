import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';
import Heading from './Heading';
import ImageData from '../types/ImageData';

function Component({ header }) {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(0);

  // change state on scroll
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const w = window;
    // eslint-disable-next-line no-undef
    const d = document;

    const handleScroll = () => {
      setScrolled(w.scrollY);
    };

    d.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      d.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header>
      <section>
        <div style={{ transform: `translateY(${scrolled / 2}px)` }}>
          <GatsbyImage image={header.image.childImageSharp.gatsbyImageData} alt="Header Bild" />
        </div>
      </section>

      <section className="relative">
        <div className="w-1/2 bg-blue absolute top-0 left-0 transform -translate-y-full h-16" />
        <Container>
          <div className="w-1/2 bg-blue z-0 absolute top-0 left-0 transform h-full" />
          <div className="col-span-5 relative">
            <div className="">
              <div className="pb-16 text-white">
                <Heading color="text-white" element="h1">
                  {header.title}
                </Heading>
                {header.text && <p className="mt-8 text-xl">{header.text}</p>}
              </div>
            </div>
          </div>
        </Container>
      </section>
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
