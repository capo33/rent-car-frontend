import * as types from "../constants/carConstants";

const initialState = {
  cars: [],
  car: {},
  loading: false,
  error: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARS_REQUEST:
    case types.GET_CAR_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case types.GET_CAR_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
      };
    case types.GET_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cars: [],
      };
    case types.GET_CAR_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        car: {},
      };
    default:
      return state;
  }
};
