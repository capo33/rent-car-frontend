import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import AddCar from "../pages/AddCar";
import Register from "../pages/Register";
import BookingCar from "../pages/BookingCar";
import UserBooking from "../components/UserBooking";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/booking-car/:carId' element={<BookingCar />} />
      <Route path='/user-booking' element={<UserBooking />} />
      <Route path='/addcar' element={<AddCar />} />
      <Route path='/editcar/:carId' element={<Edit />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
};

export default Routers;
