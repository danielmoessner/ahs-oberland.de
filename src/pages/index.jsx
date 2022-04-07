import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid';
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
  const posts = data.articles.nodes.map((node) => ({ ...node.frontmatter }));
  const jobs = data.jobs.nodes.map((node) => ({ ...node.frontmatter }));

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
                    <PhoneIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-lg font-medium text-gray-900">
                    {/* <a href="tel:+49(0)36651 380 90" rel="noreferrer">
                      +49(0)36651 380 90
                    </a> */}
                    <a
                      href="tel:01515 6298670"
                      rel="noreferrer"
                      className="text-lg font-bold text-red-500"
                    >
                      01515 6298670
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
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
                    <dt className="font-medium text-gray-900 md:text-lg">Montag</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Dienstag</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Mittwoch</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Donnerstag</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Freitag</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Samstag</dt>
                    <dd className="mt-1 text-gray-800 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 12:00 Uhr
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 pt-16 pb-32 bg-white">
        <Container>
          <div className="col-span-12 border-2 border-gray-200 md:col-span-8 md:col-start-3 2xl:col-span-6 2xl:col-start-4">
            <div className="px-8 py-6">
              <div className="grid gap-4 xl:grid-cols-2">
                <Heading element="h2" size="h3">
                  {page.jobs.title}
                </Heading>
                <ul>
                  {jobs.map((job) => (
                    <li className="flex flex-col" key={job.title}>
                      <a
                        href={job.file.publicURL}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block group"
                      >
                        <div className="mb-2">
                          <Heading element="h3" size="h4">
                            {job.title}
                          </Heading>
                        </div>
                        <p className="text-base font-normal">{job.description}</p>
                        <ExternalLinkIcon
                          className="absolute bottom-0 right-0 w-5 h-5 text-gray-400 group-hover:text-gray-600"
                          aria-hidden
                        />
                        {/* <span className="group-hover:underline">Mehr erfahren</span> */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 pt-16 pb-32 bg-white">
        <Container>
          <div className="w-full col-span-12 text-center">
            <div className="pb-8">
              <Heading element="h2" size="h2">
                Aktuelle Neuigkeiten
              </Heading>
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-x-8 gap-y-12 md:col-start-2 md:col-span-10">
            {posts.map((article) => (
              <div
                key={article.title}
                className="flex flex-col col-span-6 overflow-hidden md:col-span-4"
              >
                <div className="flex-shrink-0">
                  <Link to={`/aktuelles/${article.slug}/`}>
                    <GatsbyImage
                      className="object-cover w-full aspect-h-10 aspect-w-16"
                      image={article.image.childImageSharp.gatsbyImageData}
                      alt={article.title}
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-between flex-1 bg-white">
                  <div className="flex-1">
                    <Link to={`/aktuelles/${article.slug}/`} className="block mt-4">
                      <Heading element="h3" size="h3" className="text-2xl font-bold text-gray-900">
                        {article.title}
                      </Heading>
                      <p className="mt-4 text-lg text-gray-500">{article.description}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="absolute inset-0 bg-white bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-auto w-96">
                <GatsbyImage
                  className="block"
                  image={global.logo.childImageSharp.gatsbyImageData}
                  alt="Logo"
                />
              </div>
            </div>
            <div className="absolute px-8 pt-8 pb-6 bg-white top-16 left-20 bg-opacity-80 md:max-w-2xl">
              <Heading>{page.header.title}</Heading>
              <p className="mx-auto mt-3 text-lg text-gray-600 sm:text-xl md:mt-5">
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
                    <PhoneIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-lg font-medium text-gray-900">
                    <a href="tel:+49(0)36651 380 90" rel="noreferrer">
                      +49(0)36651 380 90
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
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
                    <dt className="font-medium text-gray-900 md:text-lg">Montag</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Dienstag</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Mittwoch</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Donnerstag</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Freitag</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
                      07:00 - 18:00 Uhr
                    </dd>
                  </div>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="font-medium text-gray-900 md:text-lg">Samstag</dt>
                    <dd className="mt-1 text-gray-500 md:text-lg sm:mt-0 sm:col-span-2 sm:text-right">
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
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
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
                    <CheckIcon className="absolute w-6 h-6 text-green-500" aria-hidden="true" />
                    <p className="text-lg font-medium leading-6 text-gray-900 ml-9">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 ml-9">{feature.description}</dd>
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
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Unsere Marken
            </h2>
            <p className="max-w-3xl mt-6 text-lg leading-7 text-gray-500">
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
              <div key={logo.name} className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
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
      jobs {
        title
      }
    }
    settingYaml(slug: { eq: "global" }) {
      logo {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "job" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...job
      }
    }
    articles: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "article" }, frontpage: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...article
      }
    }
  }
`;
