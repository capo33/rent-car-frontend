import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../redux/actions/bookActions";
import { Col, Row } from "antd";
import moment from "moment";

const UserBooking = () => {
  const { bookings } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);
  console.log("user", user.data);
  console.log("bookings", bookings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);
  return (
    <div>
      <h1 className='text-center mt-2'>My Booking</h1>
      <Row justify={"center"} gutter={16}>
        <Col lg={20} sm={24}>
          {bookings?.data &&
            bookings?.data
              ?.filter((booking) => booking.user === user.data._id)
              .map((booking) => {
                return (
                  <Row className='bs1 mt-2 text-left' key={booking._id}>
                    <Col lg={7} sm={24}>
                      <p>
                        <b>{booking?.car?.name}</b>
                      </p>
                      <p>
                        Total hours: <b>{booking?.totalHours}</b>
                      </p>
                      <p>
                        Rent per hour: <b>{booking?.car?.rentPerHour}</b>
                      </p>
                      <p>
                        Total amount: <b>{booking?.totalAmount}</b>
                      </p>
                    </Col>
                    <Col lg={10} sm={24}>
                      <p>
                        Transaction Id: <b>{booking?.transactionId}</b>
                      </p>
                      <p>
                        <strong>From: </strong>

                        {booking?.bookedTimeSlot?.from}
                      </p>
                      <p>
                        <strong>To: </strong>
                        {booking?.bookedTimeSlot?.to}
                      </p>
                      <p>
                        <strong>Booked at: </strong>
                        {moment(booking?.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                    </Col>
                    <Col lg={7} sm={24}>
                      <img
                        src={booking?.car?.image}
                        height='140'
                        alt='car'
                        className='img-fluid rounded '
                      />
                    </Col>
                  </Row>
                );
              })}
          {/* {bookings.map((booking) => (
            <div key={booking._id} className="card my-2">
              <div className="card-body">
                <h5 className="card-title">{booking.car.name}</h5>
                <p className="card-text">

                  <strong>From: </strong>
                  {new Date(booking.bookedTimeSlot.from).toLocaleString()}
                  <br />
                  <strong>To: </strong>
                  {new Date(booking.bookedTimeSlot.to).toLocaleString()}
                  <br />
                  <strong>Total Amount: </strong>
                  {booking.totalAmount} €
                </p>

                <p className="card-text">

                  <strong>Transaction Id: </strong>
                  {booking.transactionId}
                </p>

                <p className="card-text"> */}
        </Col>
      </Row>
    </div>
  );
};

export default UserBooking;
