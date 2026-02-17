import React, { useState } from 'react';
import Header from '../header/Header';
import Homepage from '../homepage/Homepage';
import Sidenav from '../sidenav/Sidenav';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Header open={open} setOpen={setOpen} handleDrawerToggle={handleDrawerToggle} />
      <Sidenav open={open} handleDrawerToggle={handleDrawerToggle} />
      <Homepage />
    </>
  );
};

export default Layout;
