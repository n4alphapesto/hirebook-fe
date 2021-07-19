import { onboardRecruiterApi, onboardJobseekerApi } from "../../api/onboard";
import { ONBOARD_SUCCESS } from "../constants/onboarding";

export const onboardJobSeeker = (payload) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      onboardJobseekerApi(payload)
        .then((result) => {
          if (result?.data?.data)
            dispatch({ type: ONBOARD_SUCCESS, payload: result.data.data });
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

export const onboardRecruiter = (payload) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      onboardRecruiterApi(payload)
        .then((result) => {
          if (result?.data?.data)
            dispatch({ type: ONBOARD_SUCCESS, payload: result.data.data });
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};
