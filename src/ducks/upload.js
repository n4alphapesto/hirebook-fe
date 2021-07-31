import { call, put } from "redux-saga/effects";
import axios from "axios";

import CONST from "../utils/constants";
//User Actions
export const UPLOAD = {
  ON_REQUEST: "UPLOAD_REQUEST",
  ON_SUCCESS: "UPLOAD_SUCCESS",
  ON_ERROR: "UPLOAD_ERROR",
};

const initialState = {};

export default function uploadReducer(state = initialState, action) {
  const { type, payload, key } = action;
  switch (type) {
    case UPLOAD.ON_REQUEST:
      return { ...state, [`${key}_Status`]: true };
    case UPLOAD.ON_SUCCESS:
      return {
        ...state,
        [`${key}_Status`]: "done",
        [`${key}_Msg`]: payload,
      };
    case UPLOAD.ON_ERROR:
      return {
        ...state,
        [`${key}_Status`]: false,
        [`${key}_Msg`]: payload,
      };
    default:
      return { ...state };
  }
}

export function upload({ formData, key }) {
  return {
    type: UPLOAD.ON_REQUEST,
    payload: formData,
    key,
  };
}

export function* uploadApi({ payload, key }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.FILE_UPLOAD_URL}`,
      data: payload,
    });
    const data = response?.data?.data;
    yield put({
      type: UPLOAD.ON_SUCCESS,
      payload: data,
      key,
    });
  } catch (e) {
    yield put({ type: UPLOAD.ON_ERROR, payload: e.response, key });
  }
}
