// import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <section>
        <Container>
          <div className="bg-white border-b border-gray-100">
            <div className="relative overflow-hidden">
              <GatsbyImage
                image={page.header.image.childImageSharp.gatsbyImageData}
                alt="Header Bild"
              />
              <div className="absolute px-8 pb-6 pt-8 bg-white top-16 left-20 bg-opacity-80 md:max-w-2xl">
                <Heading>Kontakt</Heading>
                <p className="mt-3 mx-auto text-lg text-gray-600 sm:text-xl md:mt-5">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="bg-white">
            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Kontakt</h2>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
                        dictumst amet. Sapien tortor lacus arcu.
                      </p>
                    </div>
                    <div className="mt-9">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>+49 (089) 123 4567</p>
                          <p className="mt-1">Montag-Freitag 8:00 - 16:00 Uhr</p>
                        </div>
                      </div>
                      <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                          <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>kontakt@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 md:mt-0">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Support</h2>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat
                        error corporis doloribus similique, voluptatibus numquam quam, quae officiis
                        facilis.
                      </p>
                    </div>
                    <div className="mt-9">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>+49 (089) 123 4567</p>
                          <p className="mt-1">Montag-Freitag 8:00 - 16:00 Uhr</p>
                        </div>
                      </div>
                      <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                          <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>support@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
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
    pagesYaml(slug: { eq: "contact" }) {
      ...meta
      header {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
