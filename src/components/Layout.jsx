import React from 'react';
import ChildrenData from '../types/ChildrenData';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: ChildrenData.isRequired,
};

export default Layout;
