import axios from "axios";

import * as types from "../constants/carConstants";

const API = "http://localhost:5000";

export const getCars = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_CARS_REQUEST,
    });

    const { data } = await axios.get(`${API}/api/v1/cars`);

    dispatch({
      type: types.GET_CARS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARS_FAILURE,
      payload: error.response.data,
    });
  }
};
