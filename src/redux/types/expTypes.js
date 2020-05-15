export const FETCH_EXP_DONE = "FETCH_EXP_DONE";
export const FETCH_EXP_ERROR = "FETCH_EXP_ERROR";

export const fetchExpDone = experiences => ({
  type: FETCH_EXP_DONE,
  payload: experiences
});

export const fetchExpError = error => ({
  type: FETCH_EXP_ERROR,
  payload: error
});
