import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, DatePicker } from "antd";
import moment from "moment";
import { toast } from "react-toastify";

import Spinner from "../components/Spinner";
import { getCarById } from "../redux/actions/carsActions";
import { bookingCar } from "../redux/actions/bookActions";

const BookingCar = () => {
  const { carId } = useParams();
  const { loading, car } = useSelector((state) => state.cars);
  const { user } = useSelector((state) => state.auth);
  // console.log("user", user);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const { RangePicker } = DatePicker;

  const userID = user?.data?._id;
  const selectTimeSlot = (value) => {
    // console.log("Selected Time: ", value);
    //  console.log('moment',  moment(value[0]).format("MMM DD YYYY HH:mm"));
    //  console.log('moment',  moment(value[1]).format("MMM DD YYYY HH:mm"));
    // moment to read the date and time
    const startDate = moment(value[0]?.$d).format("YYYY-MM-DD h:mm");
    const endDate = moment(value[1]?.$d).format("YYYY-MM-DD h:mm");

    setFrom(startDate);
    setTo(endDate);

    setTotalHours(value[1].diff(value[0], "hours"));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarById(carId));
  }, [dispatch, carId]);

  useEffect(() => {
    setTotalAmount(totalHours * car?.rentPerHour);

    if (driver) {
      setTotalAmount(totalAmount + 50 * totalHours);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalHours, driver, car?.rentPerHour]);

  const bookCar = () => {
    // console.log("bookCar", carId, from, to, totalHours, driver, totalAmount);
    //   const bookingData = {
    //     carId,
    //     from,
    //     to,
    //     totalHours,
    //     driver,
    //     totalAmount,
    //   };
    //   console.log("bookingData", bookingData);
    // };
    const bookingData = {
      user: userID,
      car: carId,
      from,
      to,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlot: {
        from,
        to,
      },
    };
    dispatch(bookingCar({ bookingData, toast }));
    // if (bookingData) {
    //   toast.success("Car booked successfully");
    // } else {
    //   toast.error("Car booking failed");
    // }
  };
  return (
    <div className='container mt-5'>
      {loading && <Spinner />}
      {/* start and end date */}
      <div className='row'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={car?.image} className='card-img-top' alt={car?.name} />
          </div>
          <div className='col-md-6'>
            {/* divider line */}
            <h2>Car Info</h2>
            <hr className='my-4' />
            <h1>{car?.name}</h1>
            <p>Rent per hour: {car?.rentPerHour}€</p>
            <p>Fuel Type: {car?.feulType}</p>
            <p> Capacity: {car?.capacity}</p>
          </div>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            showMinutes={true}
            showHours={true}
            format={"YYYY-MM-DD h:mm"}
            onChange={selectTimeSlot}
          />
          <p>
            Total Hours: <b> {totalHours}</b>
          </p>
          <p>
            {/* Total Amount: {totalHours && totalHours * car?.rentPerHour}€ */}
            Rent per hour: <b>{car?.rentPerHour}€</b>
          </p>

          <Checkbox
            type='checkbox'
            onChange={(e) => {
              setDriver(e.target.checked);
              if (e.target.checked) {
                setDriver(true);
              } else {
                setDriver(false);
              }
            }}
          >
            Driver
          </Checkbox>

          <p>
            Total Amount: <b>{totalAmount}€</b>
          </p>

          <button onClick={bookCar} className='btn btn-primary'>
            Book Now
          </button>
          {/* <div className='card'> */}
          {/* <img
                src={car?.image}
                className='card-img-top'
                alt={car?.name}
                style={{ height: "200px" }}
              />
              <div className='card-body'>
                <h5 className='card-title'>{car?.name}</h5>
                <p className='card-text'>{car?.description}</p>
                <p className='card-text'>
                  Rent per hour: {car?.rentPerHour}€
                </p>

                <form>
                  <div className='form-group'>
                    <label htmlFor='from'>From</label>
                    <input
                      type='datetime-local'
                      className='form-control'
                      id='from'
                      name='from'
                      placeholder='From'
                    />

                    <label htmlFor='to'>To</label>
                    <input
                      type='datetime-local'
                      className='form-control'
                      id='to'
                      name='to'
                      placeholder='To'
                    />

                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      placeholder='Name'
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='Email'
                    />

                    <label htmlFor='phone'>Phone</label>

                    <input
                      type='text'
                      className='form-control'
                      id='phone'
                      name='phone'
                      placeholder='Phone'
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea
                      className='form-control'
                      id='message'
                      name='message'
                      placeholder='Message'
                    ></textarea>

                    <button type='submit' className='btn btn-primary mt-3'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingCar;
