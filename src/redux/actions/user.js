import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../constants/userConstants";

import { getUserApi } from "../../api/common";

export const getUser = () => {
  return (dispatch) => {
    // dispatch({ type: GET_USER_START });
    return new Promise((resolve, reject) => {
      getUserApi()
        .then((result) => {
          // console.log(" user data ", result);
          dispatch({ type: GET_USER_SUCCESS, payload: result.data.data });
          resolve(result);
        })
        .catch((error) => {
          dispatch({ type: GET_USER_FAILED, payload: error });
          reject(error);
        });
    });
  };
};
