/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Container from './Container';
import ChildrenData from '../types/ChildrenData';
import Footer from './Footer';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "global" }) {
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  const global = data.settingsYaml;

  const navigation = [
    { name: 'Über uns', to: '/' },
    { name: 'Aktuelles', to: '/aktuelles/' },
    { name: 'Marken', to: '/' },
    { name: 'Gebrauchtwagen', to: '/' },
    { name: 'Kontakt', to: '/kontakt/' },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm relative z-40">
        <div className="">
          <div className="relative">
            <Popover>
              {({ open }) => (
                <>
                  <Container>
                    <div className="max-w-7xl mx-auto">
                      <div
                        className="relative flex items-center justify-between md:justify-center"
                        aria-label="Global"
                      >
                        <div className="flex items-center flex-1">
                          <div className="flex items-center justify-between w-full md:w-auto">
                            <Link className="block py-1 z-50" to="/">
                              <GatsbyImage
                                className="w-36 h-auto"
                                alt="AHS Oberland GmbH"
                                image={global.logo.childImageSharp.gatsbyImageData}
                              />
                            </Link>
                            <div className="flex items-center md:hidden">
                              <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Menü öffnen</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:absolute inset-0 w-full h-full md:flex items-center justify-center">
                          <div className="md:flex md:space-x-10">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                className="font-medium text-gray-700 hover:text-gray-900"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-3 flex items-start justify-between">
                          <div>
                            <Link to="/">
                              <GatsbyImage
                                className="w-24 h-auto"
                                alt="AHS Oberland GmbH"
                                image={global.logo.childImageSharp.gatsbyImageData}
                              />
                            </Link>
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Menü schließen</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3">
                          {navigation.map((item) => (
                            <span
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
      <main className="">{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: ChildrenData.isRequired,
};

export default Layout;
