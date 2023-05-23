import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Edit from "../pages/AddCar/Edit";
import Register from "../pages/Register";
import AddCar from "../pages/Add_Edit_Car/AddCar";
import BookingCar from "../pages/BookinCar/BookingCar";
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
