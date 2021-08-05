import React from 'react';
import PropTypes from 'prop-types';
import ChildrenData from '../types/ChildrenData';
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Container from './Container';

function Component({ children, noPadding }) {
  return (
    <section className="relative bg-white">
      <Container>
        <div className="col-span-12 bg-white border-b border-gray-100">
          <div className={noPadding ? '' : 'pt-16 pb-20 lg:pt-24 lg:pb-28'}>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Component.defaultProps = {
  noPadding: false,
};

Component.propTypes = {
  children: ChildrenData.isRequired,
  noPadding: PropTypes.bool,
};

export default Component;
