import React from 'react';
import ChildrenData from '../types/ChildrenData';

function Container({ children }) {
  return <div className="w-full mx-auto px-4 grid grid-cols-12 sm:px-6 lg:px-52">{children}</div>;
}

Container.propTypes = {
  children: ChildrenData.isRequired,
};

export default Container;
