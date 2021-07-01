import React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Container from '../components/Container';
import Layout from '../components/Layout';
// import AnimalCard from '../components/AnimalCard';
import Seo from '../components/Seo';
import Heading from '../components/Heading';
// import Section from '../components/Section';
// import Articles from '../components/Articles';
import Header from '../components/Header';

function Page({ data }) {
  const page = data.pageYaml;
  // const global = data.settingYaml;
  // const posts = data.allMarkdownRemark.nodes.map((node) => ({ ...node.frontmatter }));

  // const logos = [
  //   {
  //     name: 'Audi',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/800px-Audi-Logo_2016.svg.png',
  //   },
  //   {
  //     name: 'VW',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2000px-Volkswagen_logo_2019.svg.png',
  //   },
  //   {
  //     name: 'Porsche',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/2000px-Porsche_Logo.svg.png',
  //   },
  //   {
  //     name: 'Seat',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SEAT_Logo_from_2017.svg/967px-SEAT_Logo_from_2017.svg.png',
  //   },
  // ];

  // const features = [
  //   {
  //     name: 'Wir helfen Ihnen mit',
  //     description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  //   },
  //   {
  //     name: 'Leistung 2',
  //     description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  //   },
  //   {
  //     name: 'Gebrauchtwagen Ankauf',
  //     description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  //   },
  //   {
  //     name: 'Gebrauchtwagen Verkauf',
  //     description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  //   },
  //   {
  //     name: 'Kundenservice',
  //     description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  //   },
  //   {
  //     name: 'Kontakt',
  //     description: 'Find what you need with advanced filters, bulk actions, and quick views.',
  //   },
  // ];

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

      {/* 
      <section>
        <Container>
          <div className="relative overflow-hidden">
            <GatsbyImage
              className="filter brightness-150 contrast-50 blur-sm"
              image={page.header.image.childImageSharp.gatsbyImageData}
              alt="Header Bild"
            />
            <div className="bg-white inset-0 bg-opacity-40 absolute" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-96 h-auto">
                <GatsbyImage
                  className="block"
                  image={global.logo.childImageSharp.gatsbyImageData}
                  alt="Logo"
                />
              </div>
            </div>
            <div className="absolute px-8 pb-6 pt-8 bg-white top-16 left-20 bg-opacity-80 md:max-w-2xl">
              <Heading>{page.header.title}</Heading>
              <p className="mt-3 mx-auto text-lg text-gray-600 sm:text-xl md:mt-5">
                {page.header.text}
              </p>
              <div className="mt-4">
                <Link to="/" className="text-base font-medium text-rose-500">
                  Mehr erfahren&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Kontaktdaten</h2>
            <div className="mt-10">
              <div className="mt-3">
                <p className="text-lg text-gray-500">
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
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Öffnungszeiten</h2>
            <div className="mt-10">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Montag</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Dienstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Mittwoch</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Donnerstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Freitag</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="md:text-lg text-gray-900 font-medium">Samstag</dt>
                    <dd className="mt-1 md:text-lg text-gray-500 sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 12:00 Uhr
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
              Wir sind für Sie da
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Über uns</p>
            <p className="mt-4 text-lg text-gray-500">
              Uns gibt es seit.. Wir sind ansässig in.. Wir freuen uns auf Ihren Besuch
            </p>
            <div className="mt-8">
              <Link to="/" className="text-base font-medium text-rose-500">
                Mehr erfahren&nbsp;&rarr;
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <Articles articles={posts} title="Aktuelles" />
        <div className="mt-12">
          <Link to="/aktuelles/" className="text-base font-medium">
            Zu allen Artikeln&nbsp;&rarr;
          </Link>
        </div>
      </Section>

      <Section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Unsere Marken
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
              Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
              senectus vitae.
            </p>
            <div className="mt-6">
              <Link to="/" className="text-base font-medium text-rose-500">
                Mehr erfahren&nbsp;&rarr;
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {logos.map((logo) => (
              <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={logo.imageUrl} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </Section>
     */}
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pageYaml(slug: { eq: "home" }) {
      ...meta
      header {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
        text
      }
    }
    settingYaml(slug: { eq: "global" }) {
      logo {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
      nodes {
        ...article
      }
    }
  }
`;
