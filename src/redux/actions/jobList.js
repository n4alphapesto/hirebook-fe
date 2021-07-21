import {
  JOB_LIST_START,
  JOB_LIST_SUCCESS,
  JOB_LIST_FAILED,
} from "../constants/jobConstants";

import { getJobApi } from "../../api/common";

export const getJobList = () => {
  return (dispatch) => {
    dispatch({ type: JOB_LIST_START });
    return new Promise((resolve, reject) => {
      getJobApi()
        .then((result) => {
          dispatch({ type: JOB_LIST_SUCCESS });
          resolve(result);
        })
        .catch((error) => {
          dispatch({ type: JOB_LIST_FAILED, payload: error });
          reject(error);
        });
    });
  };
};
