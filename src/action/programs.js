import axios from 'axios';

import {
  ROOT,
  REQUEST_PROGRAMS,
  RECEIVE_PROGRAMS
} from "./types";


export const fetchPrograms = (filters="") => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROGRAMS });
    const res = await axios.get(`${ROOT}${filters}`);
    dispatch({ type: RECEIVE_PROGRAMS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_PROGRAMS, payload: [] });
  }
};
