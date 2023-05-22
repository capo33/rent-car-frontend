import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Col, DatePicker, Row } from "antd";
import moment from "moment";
import { getCars } from "../redux/actions/carsActions";
import Spinner from "../components/Spinner";
import { Container } from "react-bootstrap";
import Hero from "./Hearo/Hero";
import CarItem from "../components/CarItem/CarItem";

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

  // filtercar by giving date
  const setFilterCars = (values) => {
    const startDate = moment(values[0]?.$d).format("YYYY-MM-DD h:mm");
    const endDate = moment(values[1]?.$d).format("YYYY-MM-DD h:mm");
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    const filterCars = cars.filter((car) => {
      return car.bookedTimeSlots.every(
        (booking) =>
          moment(startDate).isBefore(booking.from) ||
          moment(startDate).isAfter(booking.to) ||
          moment(endDate).isBefore(booking.from) ||
          moment(endDate).isAfter(booking.to)
      );
    });

    console.log("filterCars", filterCars);
    setTotalCars(filterCars);
  };

  return (
    <>
      <Hero />
      <Container>
        <Row className='mt-3' justify={"center"}>
          <Col lg={20} sm={24} className='text-center'>
            <h2>Available Cars by Date and Time Range</h2>
          </Col>
          <Col>
            <RangePicker
              showTime={{ format: "HH:mm" }}
              showMinutes={true}
              showHours={true}
              format={"YYYY-MM-DD h:mm"}
              onChange={setFilterCars}
            />
          </Col>
        </Row>

        {loading && <Spinner />}
        <Row>
          {totalCars?.map((car) => (
            <CarItem car={car} key={car._id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
