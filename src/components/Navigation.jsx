import React, { Fragment } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';
import NavigationDropdown from './NavigationDropdown';
import NavigationLink from './NavigationLink';

function Component() {
  const data = useStaticQuery(graphql`
    {
      navigation: settingYaml(slug: { eq: "navigation" }) {
        links {
          text
          url
          type
          links {
            text
            url
          }
        }
      }
      global: settingYaml(slug: { eq: "global" }) {
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  const { navigation, global } = data;

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-gray-800 border-opacity-10">
      <Container>
        <div className="col-span-12 ">
          <Popover className="relative">
            {({ open }) => (
              <>
                <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link className="block py-1 z-50" to="/">
                      <GatsbyImage
                        className="w-36 h-auto"
                        alt="AHS Oberland GmbH"
                        image={global.logo.childImageSharp.gatsbyImageData}
                      />
                    </Link>
                  </div>
                  <div className="md:hidden">
                    <Popover.Button className="bg-white border-2 border-gray-100 rounded-md px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Menü öffnen</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-4">
                    {navigation.links &&
                      navigation.links.map((link) => {
                        if (link.type === 'link')
                          return <NavigationLink key={link.text} link={link} />;
                        if (link.type === 'links')
                          return <NavigationDropdown key={link.text} link={link} />;
                        return '?';
                      })}
                  </Popover.Group>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 pt-2 transition transform origin-top-right z-40 md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-4 pb-6 px-5">
                        <div className="flex items-center justify-between border-b pb-2">
                          <Link to="/">
                            <GatsbyImage
                              className="w-24 h-auto"
                              alt="AHS Oberland GmbH"
                              image={global.logo.childImageSharp.gatsbyImageData}
                            />
                          </Link>
                          <div className="">
                            <Popover.Button className="bg-white rounded-md border-2 border-gray-100 px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                              <span className="sr-only">Menü schließen</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6 space-y-4">
                          {navigation.links &&
                            navigation.links.map((link) => {
                              if (link.type === 'link')
                                return <NavigationLink key={link.text} link={link} />;
                              if (link.type === 'links')
                                return <NavigationDropdown key={link.text} link={link} />;
                              return '?';
                            })}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </Container>
    </nav>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
