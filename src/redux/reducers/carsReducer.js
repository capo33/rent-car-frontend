import * as types from '../constants/carConstants';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARS_REQUEST:
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
    case types.GET_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cars: [],
      };
    default:
      return state;
  }
}