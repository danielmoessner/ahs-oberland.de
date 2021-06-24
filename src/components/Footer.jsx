import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

function Component() {
  const data = useStaticQuery(graphql`
    {
      footer: settingYaml(slug: { eq: "footer" }) {
        copyright
        columns {
          title
          class
          content {
            url
            text
            type
          }
        }
      }
    }
  `);
  const { footer } = data;

  return (
    <footer className="bg-black" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-8">
              {footer.columns &&
                footer.columns.map((column) => (
                  <div key={column.title} className={column.class}>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      {column.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {column.content &&
                        column.content.map((item) => {
                          let element = '?';
                          if (item.type === 'text')
                            element = (
                              <div className="text-base text-gray-300 whitespace-pre-line">
                                {item.text}
                              </div>
                            );
                          if (item.type === 'link')
                            element = (
                              <Link
                                to={item.url}
                                className="text-base text-gray-300 hover:text-white"
                              >
                                {item.text}
                              </Link>
                            );
                          if (item.type === 'externalLink')
                            element = (
                              <a
                                href={item.url}
                                target="_blank"
                                className="text-base text-gray-300 hover:text-white"
                                rel="noreferrer"
                              >
                                {item.text}
                              </a>
                            );

                          return <li key={`${item.text}${item.type}`}>{element}</li>;
                        })}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Component;
