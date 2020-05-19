export const ACTIVITIES_FETCH = "ACTIVITIES_FETCH";
export const ACTIVITIES_ERROR = "ACTIVITIES_ERROR";

export const activitiesFetch = activities => ({
  type: ACTIVITIES_FETCH,
  payload: activities
});

export const activitiesError = () => ({
  type: ACTIVITIES_ERROR
});
