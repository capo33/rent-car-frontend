import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { getBookings } from "../redux/actions/bookActions";

import "./userBooking.scss";

const UserBooking = () => {
  const { bookings } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <div>
      <section className='light'>
        <div className='container py-2'>
          <div className='h1 text-center text-dark' id='pageHeaderTitle'>
            My Bookings
          </div>
          <div className=''>
            {bookings?.data &&
              bookings?.data
                ?.filter((booking) => booking.user === user.data._id)
                .map((booking) => {
                  return (
                    <article className='postcard light blue'>
                      <a className='postcard__img_link' href='/'>
                        <img
                          className='postcard__img'
                          src={booking?.car?.image}
                          alt='car'
                        />
                      </a>
                      <div className='postcard__text t-dark'>
                        <h1 className='postcard__title blue'>
                          <a href='/'>{booking?.car?.name}</a>
                        </h1>
                        <div className='postcard__subtitle small'>
                          <time dateTime='2020-05-25 12:00:00'>
                            Booked at:{" "}
                            {moment(booking?.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </time>
                        </div>
                        <div className='postcard__bar' />
                        <div className='postcard__preview-txt'>
                          <ul className='postcard__tagbox'>
                            <li className='tag__item'>
                              <i className='fas fa-tag mr-2' />
                              total hours: {booking?.totalHours}
                            </li>
                            <li className='tag__item'>
                              <i className='fas fa-tag mr-2' />
                              rent per hour: {booking?.car?.rentPerHour}
                            </li>
                            <li className='tag__item'>
                              <i className='fas fa-tag mr-2' />
                              total amount: {booking?.totalAmount}
                            </li>
                            <li className='tag__item'>
                              <i className='fas fa-tag mr-2' />
                              transaction Id: {booking?.transactionId}
                            </li>
                            <li className='tag__item'>
                              <i className='fas fa-clock mr-2' />
                              from: {booking?.bookedTimeSlot?.from}
                            </li>
                            <li className='tag__item play blue'>
                              <i className='fas fa-play mr-2' />
                              to: {booking?.bookedTimeSlot?.to}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserBooking;
