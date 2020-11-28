import {
    REQUEST_PROGRAMS,
    RECEIVE_PROGRAMS
  } from "../action/types";

  const INITIAL_STATE = {
    data: [],
    isFetching: false,
    lastUpdate: Date.now()
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_PROGRAMS: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_PROGRAMS: {
        return { ...state, isFetching: false, data: action.payload };
      }
      default:
        return state;
    }
  };