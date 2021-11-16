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
    <nav className="relative z-30 w-full border-opacity-90 border-b-gray-500/20 border-b-4">
      <Container>
        <div className="col-span-12 ">
          <Popover className="relative">
            {({ open }) => (
              <>
                <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link className="py-1 z-50 flex items-center space-x-4" to="/">
                      <h1 className="relative font-ethno text-xl lg:text-3xl xl:text-5xl text-gray-800">
                        AHS Oberland&nbsp;
                        <span className="">GmbH</span>
                      </h1>
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
                    className="absolute top-0 inset-x-0 pt-2 transition transform origin-top-right z-50 md:hidden"
                  >
                    <div className="rounded-lg shadow-lg bg-white">
                      <div className="pt-4 pb-6 px-5">
                        <div className="flex items-center justify-between">
                          <Link to="/">
                            <GatsbyImage
                              className="w-24 h-auto"
                              alt="AHS Oberland GmbH"
                              image={global.logo.childImageSharp.gatsbyImageData}
                            />
                          </Link>
                          <div className="">
                            <Popover.Button className="bg-white rounded-md px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                              <span className="sr-only">Menü schließen</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="space-y-4">
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
