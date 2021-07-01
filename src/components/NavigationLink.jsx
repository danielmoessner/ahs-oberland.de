import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ link }) {
  return (
    <>
      <Link
        to={link.url}
        activeClassName="bg-gray-50"
        className="px-3 py-1 rounded-md hidden text-base font-medium text-gray-600 hover:text-gray-900 md:block focus:outline-none focus:ring-offset-0 focus:ring-gray-800 focus:ring-opacity-10 focus:ring hover:ring-gray-800 hover:ring-opacity-5 hover:ring"
      >
        {link.text}
      </Link>
      <div className="md:hidden">
        <Link to={link.url} className="text-base font-medium text-gray-900 hover:text-gray-700">
          {link.text}
        </Link>
      </div>
    </>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Component;
