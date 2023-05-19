 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookingCar from './pages/BookingCar';
 import Header from './components/Header';

function App() {
  return (
    <Router >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking-car" element={<BookingCar />} />

      </Routes>
    </Router>    
  );
}

export default App;
