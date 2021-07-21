import axios from "axios";
import { loginApi, registerApi, verifyOTPApi } from "../../api/auth";
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  VERIFY_START,
  VERIFY_FAILED,
  VERIFY_SUCCESS,
} from "../constants/userConstants";

export const login = (payload) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    return new Promise((resolve, reject) => {
      loginApi(payload)
        .then((result) => {
          localStorage.setItem("token", result?.data?.data?.token);
          dispatch({ type: LOGIN_SUCCESS, payload: result?.data?.data });
          resolve(result);
        })
        .catch((error) => {
          dispatch({ type: LOGIN_FAILED, payload: error });
          reject(error);
        });
    });
  };
};

export const register = (payload) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_START });
    return new Promise((resolve, reject) => {
      registerApi(payload)
        .then((result) => {
          console.log("11 register result 11", result);
          localStorage.setItem("token", result?.data?.data?.token);
          dispatch({ type: SIGNUP_SUCCESS });
          resolve(result);
        })
        .catch((error) => {
          console.log("11 regiuster error 11", error);
          dispatch({ type: SIGNUP_FAILED, payload: error });
          reject(error);
        });
    });
  };
};

export const verify = (payload) => {
  return (dispatch) => {
    dispatch({ type: VERIFY_START });
    return new Promise((resolve, reject) => {
      verifyOTPApi(payload)
        .then((result) => {
          dispatch({ type: VERIFY_SUCCESS });
          resolve(result);
        })
        .catch((error) => {
          dispatch({ type: VERIFY_FAILED, payload: error });
          reject(error);
        });
    });
  };
};
