import * as types from "../constants/bookConstants";

const initialState = {
  bookings: [],
  loading: false,
  bookedCar: null,
  error: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOOKING_CAR_REQUEST:
    case types.GET_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.BOOKING_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        bookedCar: action.payload,
      };

    case types.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case types.BOOKING_CAR_FAILURE:
    case types.GET_BOOKINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { bookingReducer };
