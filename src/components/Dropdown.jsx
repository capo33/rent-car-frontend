import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions/authActions";
 
import "./Dropdown.css";
const Dropdown = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div className='dropdown m-2' >
      <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Rental Center
      </button>
      <ul className='dropdown-menu'>
        <li>
          <Link className='dropdown-item' to='/'>
            Home
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link className='dropdown-item' to='/booking'>
                Booking
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' to='/profile'>
                Profile
              </Link>
            </li>
            <li>
              <Link
                className='dropdown-item text-danger'
                to='/login'
                onClick={() => logout()}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className='dropdown-item' to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link className='dropdown-item' to='/register'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
