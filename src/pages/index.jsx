import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
// import Layout from '../components/Layout';
// import AnimalCard from '../components/AnimalCard';
import Seo from '../components/Seo';
// import Animate from '../components/Animate';
// import Animate from '../components/AnimateNew2';

function Page({ data }) {
  const page = data.pagesYaml;
  const global = data.settingsYaml;

  return (
    <>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center py-16 px-4 bg-white rounded-sm shadow mt-4 mb-32 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            <GatsbyImage
              className="w-64 h-auto mb-10"
              alt="AHS Oberland GmbH"
              image={global.logo.childImageSharp.gatsbyImageData}
            />
            <span className="block mb-10">Webseite im Aufbau</span>
          </h2>
          <div className="text-lg leading-snug text-left max-w-md mx-auto">
            <p className="mb-3">Vielen Dank für Ihren Besuch.</p>
            <p className="mb-3">
              Unsere Webseite befindet sich gerade im Aufbau und wird demnächst online gehen.
            </p>
            <p className="mb-3">
              Bei Fragen können Sie uns hier erreichen: <br />
              <a
                className="text-blue-800 hover:text-blue-900 hover:underline my-1 block"
                href="tel:03665138090"
              >
                036 6513 8090 
              </a>
              <a
                className="text-blue-800 hover:text-blue-900 hover:underline my-1 block"
                href="mailto:info@ahs-oberland.de"
              >
                info@ahs-oberland.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
      }
    }
    settingsYaml(slug: { eq: "global" }) {
      logo {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
