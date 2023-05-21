 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookingCar from './pages/BookingCar';
 import Header from './components/Header';
import UserBooking from './components/UserBooking';
import { AddCar } from './pages/AddCar';

function App() {
  return (
    <Router >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking-car/:carId" element={<BookingCar />} />
        <Route path="/user-booking" element={<UserBooking />} />
        <Route path="/addcar" element={<AddCar />} />

      </Routes>
    </Router>    
  );
}

export default App;
