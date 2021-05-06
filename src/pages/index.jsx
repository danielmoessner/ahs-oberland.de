import React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CheckIcon } from '@heroicons/react/outline';
import Container from '../components/Container';
import Layout from '../components/Layout';
// import AnimalCard from '../components/AnimalCard';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

function Page({ data }) {
  const page = data.pagesYaml;
  // const global = data.settingsYaml;

  const posts = [
    {
      title: 'Boost your conversion rate',
      to: '#',
      category: { name: 'Article', to: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        to: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      to: '#',
      category: { name: 'Video', to: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        to: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      to: '#',
      category: { name: 'Case Study', to: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        to: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

  const logos = [
    {
      name: 'Audi',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/800px-Audi-Logo_2016.svg.png',
    },
    {
      name: 'VW',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2000px-Volkswagen_logo_2019.svg.png',
    },
    {
      name: 'Porsche',
      url:
        'https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/2000px-Porsche_Logo.svg.png',
    },
    {
      name: 'Seat',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/SEAT_Logo_from_2017.svg/967px-SEAT_Logo_from_2017.svg.png',
    },
  ];

  const features = [
    {
      name: 'Wir helfen Ihnen mit',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
      name: 'Leistung 2',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
      name: 'Gebrauchtwagen Ankauf',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
      name: 'Gebrauchtwagen Verkauf',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
      name: 'Kundenservice',
      description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
      name: 'Kontakt',
      description: 'Find what you need with advanced filters, bulk actions, and quick views.',
    },
  ];

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
            <div className="relative">
              <GatsbyImage
                image={page.header.image.childImageSharp.gatsbyImageData}
                alt="Header Bild"
              />
              <div className="absolute px-8 pb-6 pt-8 bg-white top-16 left-20 bg-opacity-80 md:max-w-2xl">
                <Heading>Der neue Audi bei uns im Angebot</Heading>
                <p className="mt-3 mx-auto text-lg text-gray-600 sm:text-xl md:mt-5">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-4">
                  <Link to="/" className="text-base font-medium text-rose-500">
                    Mehr erfahren&nbsp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
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
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="bg-white border-b border-gray-100">
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="">
                  <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    Aktuelles
                  </h2>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                  {posts.map((post) => (
                    <div key={post.title} className="flex flex-col overflow-hidden">
                      <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                      </div>
                      <div className="flex-1 bg-white flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-right text-sm hidden font-medium text-indigo-600">
                            <Link to={post.category.to} className="hover:underline">
                              {post.category.name}
                            </Link>
                          </p>
                          <Link to={post.to} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500">{post.description}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link to="/" className="text-base font-medium text-rose-500">
                    Zu allen Artikeln&nbsp;&rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="bg-white py-20 border-b border-gray-100">
            <div className="">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                      Unsere Marken
                    </h2>
                    <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                      Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                      consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
                      morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet
                      vitae fames senectus vitae.
                    </p>
                    <div className="mt-6">
                      <Link to="/" className="text-base font-medium text-rose-500">
                        Mehr erfahren&nbsp;&rarr;
                      </Link>
                    </div>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                    {logos.map((logo) => (
                      <div
                        key={logo.name}
                        className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                      >
                        <img className="max-h-12" src={logo.url} alt={logo.name} />
                      </div>
                    ))}
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
      header {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
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
