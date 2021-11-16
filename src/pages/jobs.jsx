import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
// import Section from '../components/Section';
import Container from '../components/Container';
import Heading from '../components/Heading';

function Page({ data }) {
  const page = data.pageYaml;
  const jobs = data.allMarkdownRemark.nodes.map((node) => ({ ...node.frontmatter }));

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <section className="relative z-20 bg-white pt-16 pb-32">
        <Container>
          <div className="border-2 border-gray-200 col-span-12 md:col-span-8 md:col-start-3 2xl:col-span-6 2xl:col-start-4">
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
                        className="group block relative"
                      >
                        <div className="mb-2">
                          <Heading element="h3" size="h4">
                            {job.title}
                          </Heading>
                        </div>
                        <p className="font-normal text-base">{job.description}</p>
                        <ExternalLinkIcon
                          className="w-5 h-5 absolute bottom-0 right-0 text-gray-400 group-hover:text-gray-600"
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
    pageYaml(slug: { eq: "jobs" }) {
      ...meta
      ...header
      jobs {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "job" } } }) {
      nodes {
        ...job
      }
    }
  }
`;
