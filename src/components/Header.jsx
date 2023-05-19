import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authActions";
import Dropdown from "./Dropdown";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

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
