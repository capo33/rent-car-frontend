import axios from "axios";

import * as types from "../constants/bookConstants";

const API = "http://localhost:5000";

// Book a car
export const bookingCar = ({bookingData, token, toast}) => async (dispatch) => {
  try {
    dispatch({
      type: types.BOOKING_CAR_REQUEST,
    });

    const { data } = await axios.post(`${API}/api/v1/bookings`, bookingData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    });

   
    dispatch({
      type: types.BOOKING_CAR_SUCCESS,
      payload: data,
    });
    toast.success("Car booked successfully");
  } catch (error) {
    dispatch({
      type: types.BOOKING_CAR_FAILURE,
      payload: error?.response?.data?.message,
    });
  }
};

// Get all bookings
export const getBookings = (token) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BOOKINGS_REQUEST,
    });

    const { data } = await axios.get(`${API}/api/v1/bookings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    });

    dispatch({
      type: types.GET_BOOKINGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_BOOKINGS_FAILURE,
      payload: error?.response?.data?.message,
    });
  }
}