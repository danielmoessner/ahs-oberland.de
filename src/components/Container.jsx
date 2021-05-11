import React from 'react';
import ChildrenData from '../types/ChildrenData';

function Container({ children }) {
  return <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}

Container.propTypes = {
  children: ChildrenData.isRequired,
};

export default Container;
