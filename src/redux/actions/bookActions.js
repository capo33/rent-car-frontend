import axios from "axios";

import * as types from "../constants/bookConstants";

const API = "http://localhost:5000";

// Book a car
export const bookingCar = (bookingData) => async (dispatch) => {
  try {
    dispatch({
      type: types.BOOKING_CAR_REQUEST,
    });

    const { data } = await axios.post(`${API}/api/v1/bookings`, bookingData);

    dispatch({
      type: types.BOOKING_CAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.BOOKING_CAR_FAILURE,
      payload: error.response.data,
    });
  }
};
