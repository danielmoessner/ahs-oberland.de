// import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pageYaml;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section className="relative z-20 bg-white">
        <Container>
          <div className="col-span-12 py-16 md:col-span-6">
            <Heading element="h2" size="h2">
              Unsere Kontaktdaten
            </Heading>
            <div className="mt-10">
              <div className="mt-3">
                <p className="text-xl text-gray-800">
                  Weiterhin sind wir wie gewohnt für Sie da. <br />
                  Sie erreichen uns unter folgenden Kontaktdaten:
                </p>
              </div>
              <div className="mt-9">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-lg font-medium text-gray-900">
                    <a href="tel:+49(0)36651 380 90" rel="noreferrer">
                      +49(0)36651 380 90
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-lg font-medium text-gray-900">
                    <a target="_blank" href="mailto:info@ahs-oberland.de" rel="noreferrer">
                      info@ahs-oberland.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 py-16 md:col-span-6">
            <Heading element="h2" size="h2">
              Unsere Öffnungszeiten
            </Heading>
            <div className="mt-10">
              <div className="max-w-lg lg:max-w-none">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Montag</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Dienstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Mittwoch</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Donnerstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Freitag</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Samstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-800 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 12:00 Uhr
                    </dd>
                  </div>
                </dl>
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
    pageYaml(slug: { eq: "contact" }) {
      ...meta
      ...header
    }
  }
`;
