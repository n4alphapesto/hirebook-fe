import { call, put } from "redux-saga/effects";
import axios from "axios";

import CONST from "../utils/constants";
import { setCookies } from "../utils";
//User Actions
export const LOG_OUT = {
  ON_REQUEST: "LOGOUT_REQUEST",
  ON_SUCCESS: "LOGOUT_SUCCESS",
};

export const RESEND_OTP = {
  ON_REQUEST: "RESEND_OTP_REQUEST",
  ON_SUCCESS: "RESEND_OTP_SUCCESS",
  ON_ERROR: "RESEND_OTP_ERROR",
};

export const VERIFY_USER = {
  ON_REQUEST: "VERIFY_USER_REQUEST",
  ON_SUCCESS: "VERIFY_USER_SUCCESS",
  ON_ERROR: "VERIFY_USER_ERROR",
};

export const USER_LOGIN = {
  ON_REQUEST: "USER_LOGIN_REQUEST",
  ON_SUCCESS: "USER_LOGIN_SUCCESS",
  ON_ERROR: "USER_LOGIN_ERROR",
};

export const REGISTER_USER = {
  ON_REQUEST: "REGISTER_USER_REQUEST",
  ON_SUCCESS: "REGISTER_USER_SUCCESS",
  ON_ERROR: "REGISTER_USER_ERROR",
};

//User Actions
export const SAVE_SEEKER_PROFILE = {
  ON_REQUEST: "SAVE_SEEKER_REQUEST",
  ON_SUCCESS: "SAVE_SEEKER_SUCCESS",
  ON_ERROR: "SAVE_SEEKER_ERROR",
};

export const SAVE_RECRUITER_PROFILE = {
  ON_REQUEST: "SAVE_RECRUITER_REQUEST",
  ON_SUCCESS: "SAVE_RECRUITER_SUCCESS",
  ON_ERROR: "SAVE_RECRUITER_ERROR",
};

export const GET_USER = {
  ON_REQUEST: "GET_USER_REQUEST",
  ON_SUCCESS: "GET_USER_SUCCESS",
  ON_ERROR: "GET_USER_ERROR",
};

const initialState = {
  userDetails: null,
  isUserLoading: true,
  isLogging: false,
  loginErrorMsg: null,
  isVerifying: false,
  verifyErrorMsg: null,
  resendingOtp: false,
  isSignin: false,
  signInErrMsg: null,
  isSavingSeekerProfile: false,
  saveSeekerProfileMsg: null,
  isSavingRecruiterProfile: false,
  saveRecruiterProfileMsg: null,
};
export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN.ON_REQUEST:
      return {
        ...state,
        isLogging: true,
        loginErrorMsg: null,
        userDetails: null,
      };
    case USER_LOGIN.ON_SUCCESS:
      return {
        ...state,
        isLogging: "done",
        loginErrorMsg: null,
        userDetails: payload,
      };
    case USER_LOGIN.ON_ERROR:
      return {
        ...state,
        isLogging: true,
        loginErrorMsg: payload,
        userDetails: null,
      };
    case RESEND_OTP.ON_REQUEST:
      return { ...state, resendingOtp: true };
    case RESEND_OTP.ON_SUCCESS:
      return { ...state, resendingOtp: false };
    case RESEND_OTP.ON_ERROR:
      return { ...state, resendingOtp: false };
    case VERIFY_USER.ON_REQUEST:
      return { ...state, isVerifying: true, verifyErrorMsg: null };
    case VERIFY_USER.ON_SUCCESS:
      return { ...state, isVerifying: "done", userDetails: payload };
    case VERIFY_USER.ON_ERROR:
      return { ...state, isVerifying: false, verifyErrorMsg: payload };
    case REGISTER_USER.ON_REQUEST:
      return { ...state, isSignin: true, signInErrMsg: null };
    case REGISTER_USER.ON_SUCCESS:
      return { ...state, isSignin: "done" };
    case REGISTER_USER.ON_ERROR:
      return { ...state, isSignin: false, signInErrMsg: payload };
    case SAVE_SEEKER_PROFILE.ON_REQUEST:
      return { ...state, isSavingSeekerProfile: true, saveProfileErrMsg: null };
    case SAVE_SEEKER_PROFILE.ON_SUCCESS:
      return { ...state, isSavingSeekerProfile: "done", userDetails: payload };
    case SAVE_SEEKER_PROFILE.ON_ERROR:
      return {
        ...state,
        isSavingSeekerProfile: false,
        saveSeekerProfileMsg: payload,
      };
    case SAVE_RECRUITER_PROFILE.ON_REQUEST:
      return {
        ...state,
        isSavingRecruiterProfile: true,
        saveProfileErrMsg: null,
      };
    case SAVE_RECRUITER_PROFILE.ON_SUCCESS:
      return {
        ...state,
        isSavingRecruiterProfile: "done",
        userDetails: payload,
      };
    case SAVE_RECRUITER_PROFILE.ON_ERROR:
      return {
        ...state,
        isSavingRecruiterProfile: false,
        saveRecruiterProfileMsg: payload,
      };

    case GET_USER.ON_REQUEST:
      return { ...state, userDetails: null };
    case GET_USER.ON_SUCCESS:
      return { ...state, isUserLoading: "done", userDetails: payload };
    case GET_USER.ON_ERROR:
      return { ...state, isUserLoading: false, userDetails: null };

    case LOG_OUT.ON_SUCCESS:
      return { ...state, userDetails: null };
    default:
      return { ...state };
  }
}

export function login(payload) {
  return {
    type: USER_LOGIN.ON_REQUEST,
    payload,
  };
}

export function verify(payload) {
  return {
    type: VERIFY_USER.ON_REQUEST,
    payload,
  };
}

export function resendOtp(payload) {
  return {
    type: RESEND_OTP.ON_REQUEST,
    payload,
  };
}

export function register(payload) {
  return {
    type: REGISTER_USER.ON_REQUEST,
    payload,
  };
}

export function getUser() {
  return {
    type: GET_USER.ON_REQUEST,
  };
}

export function logout() {
  return {
    type: LOG_OUT.ON_REQUEST,
  };
}

export function* loginApi({ payload }) {
  const options = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.LOGIN}`,
      data: options,
    });
    const data = response.data?.data;
    setCookies("ssoToken", response.data.data.token);
    yield put({
      type: USER_LOGIN.ON_SUCCESS,
      payload: data,
    });
    // enqueueSnackbar("Login Successfully.", { variant: "success" });
  } catch (e) {
    yield put({ type: USER_LOGIN.ON_ERROR, payload: e.response });
    // enqueueSnackbar(error.message, { variant: "error" });
  }
}

export function* verifyOTPApi({ payload }) {
  const options = {
    email: payload.email,
    otp: payload.otp,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.VERIFY}`,
      data: options,
    });
    const data = response.data?.data;
    yield put({
      type: VERIFY_USER.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: VERIFY_USER.ON_ERROR, payload: e.response });
  }
}

export function* resendOtpApi({ payload }) {
  const options = {
    email: payload.email,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.RESEND_OTP}`,
      data: options,
    });
    const data = response.data;
    yield put({
      type: RESEND_OTP.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // enqueueSnackbar("Operation Failed.", { variant: "error" });
    yield put({ type: RESEND_OTP.ON_ERROR, payload: e.response });
  }
}

export function* registerApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.REGISTER}`,
      data: payload,
    });
    const data = response.data;
    setCookies("ssoToken", response.data.data.token);
    // enqueueSnackbar("Signup Successfully.", { variant: "success" });
    yield put({
      type: REGISTER_USER.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // enqueueSnackbar("Signup Failed.", { variant: "error" });
    yield put({ type: REGISTER_USER.ON_ERROR, payload: e.response });
  }
}

export function saveRecruiter(payload) {
  return {
    type: SAVE_RECRUITER_PROFILE.ON_REQUEST,
    payload,
  };
}

export function saveJobSeeker(payload) {
  return {
    type: SAVE_SEEKER_PROFILE.ON_REQUEST,
    payload,
  };
}

export function* saveRecruiterApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.SAVE_RECRUITER}`,
      data: payload,
    });
    const data = response.data.data;
    yield put({
      type: SAVE_RECRUITER_PROFILE.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: SAVE_RECRUITER_PROFILE.ON_ERROR, payload: e.response });
  }
}

export function* saveSeekerProfile({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.USER_URL.SAVE_JOBSEEKER}`,
      data: payload,
    });
    const data = response.data.data;
    yield put({
      type: SAVE_SEEKER_PROFILE.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: SAVE_SEEKER_PROFILE.ON_ERROR, payload: e.response });
  }
}

export function* getUserApi() {
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${CONST.BASE_URL + CONST.USER_URL.GET_USER}`,
    });
    const data = response.data.data;
    yield put({
      type: GET_USER.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: GET_USER.ON_ERROR, payload: e.response });
  }
}

export function* logoutAction() {
  yield put({ type: LOG_OUT.ON_SUCCESS });
}
