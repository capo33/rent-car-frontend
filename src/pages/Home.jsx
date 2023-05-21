import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Col, DatePicker, Row } from "antd";
import moment from "moment";
import { getCars } from "../redux/actions/carsActions";
import Spinner from "../components/Spinner";

const { RangePicker } = DatePicker;

const Home = () => {
  const { cars, loading } = useSelector((state) => state.cars);
  const [totalCars, setTotalCars] = useState([]);
  const dispatch = useDispatch();
  console.log("totalCars", totalCars);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    setTotalCars(cars);
  }, [cars]);

 
  const setFilterCars = (cars) => {
   };
  return (
    <>
      <Row className='mt-3' justify={"center"}>
        <Col lg={20} sm={24} className='d-flex justify-center-left'>
          {/* <h1 className='text-center'>Available Cars</h1> */}
          <RangePicker
            showTime={{ format: "HH:mm" }}
            showMinutes={true}
            showHours={true}
            format={"YYYY-MM-DD h:mm"}
            onChange={setFilterCars
            }
          />
        </Col>
      </Row>

      {loading && <Spinner />}
      <div className='container'>
        <div className='row'>
          {totalCars?.map((car) => (
            <div className='col-md-4 my-3 mt-5' key={car._id}>
              <div className='card'>
                <img
                  src={car.image}
                  className='card-img-top'
                  alt={car.name}
                  style={{ height: "200px" }}
                />
                {/* <Link to={`/cars/${car._id}`}>
                </Link> */}
                <div className='card-body'>
                  <h5 className='card-title'>{car.name}</h5>
                  <p className='card-text'>{car.description}</p>
                  <p className='card-text'>Rent per hour: {car.rentPerHour}€</p>
                  <Link
                    to={`/booking-car/${car._id}`}
                    className='btn btn-primary'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
