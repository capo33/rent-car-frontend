import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-info'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Rental Center
        </Link>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Header;
