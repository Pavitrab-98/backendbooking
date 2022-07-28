import {
    ADD_BOOKING,
    GET_BOOKING,
    UPDATE_BOOKING,
    CANCEL_BOOKING,
    
  }  from "../actions/types";

  const initialState = [];
  
  function bookingReducer(bookings = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_BOOKING:
        return [...bookings, payload];
      case GET_BOOKING:
        return payload;
      case UPDATE_BOOKING:
        return bookings.map((booking) => {
          if (booking.bookingId === payload.bookingId) {
            return {
              ...booking,
              ...payload,
            };
          } else {
            return booking;
          }
        });
      case CANCEL_BOOKING:
        return bookings.filter(({ bookingId }) => bookingId!== payload.bookingId);
      
      default:
        return bookings;
    }
  };
  export default bookingReducer;