import React from "react";
import NavMenu from "./NavMenu";
import ReactSlick from '../components/ReactSlick'

const Header = () => {
  
  return (
    <header>
      <ReactSlick />
      <NavMenu className="w-full" />
    </header>
  );
};

export default Header;
