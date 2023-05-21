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

export const getCarById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_CAR_BY_ID_REQUEST,
    });

    const { data } = await axios.get(`${API}/api/v1/cars/${id}`);

    dispatch({
      type: types.GET_CAR_BY_ID_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_CAR_BY_ID_FAILURE,
      payload: error.response.data,
    });
  }
}

export const addCar = (carData, toast) => async (dispatch) => {
  try {
    dispatch({
      type: types.CREATE_CAR_REQUEST ,
    });

    const { data } = await axios.post(`${API}/api/v1/cars`, carData);
console.log('data', data);
    dispatch({
      type: types.CREATE_CAR_SUCCESS,
      payload: data,
    });
    toast.success("Car added successfully");
  } catch (error) {
    dispatch({
      type: types.CREATE_CAR_FAILURE,
      payload: error?.response?.data?.message,
    });
  }
}