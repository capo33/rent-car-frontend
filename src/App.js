import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingCar from "./pages/BookingCar";
 import UserBooking from "./components/UserBooking";
import { AddCar } from "./pages/AddCar";
import Admin from "./pages/Admin";
import { Edit } from "./pages/Edit";
import Header from "./components/Headers/Header";

function App() {
  return (
    <Router>
    <Header />
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
    </Router>
  );
}

export default App;
