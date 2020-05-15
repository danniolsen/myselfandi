import { FETCH_EXP_DONE, FETCH_EXP_ERROR } from "../types/expTypes";

const initialState = {
  exps: [],
  error: null,
  loading: true
};

const expReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXP_DONE:
      return {
        ...state,
        exps: action.payload.experience,
        loading: false,
        error: null
      };
    case FETCH_EXP_ERROR:
      return {
        exps: [],
        loading: false,
        error: "Could not fetch data"
      };
    default:
      return { ...state };
  }
};

export default expReducer;
