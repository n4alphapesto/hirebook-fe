import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  VERIFY_START,
  VERIFY_FAILED,
  VERIFY_SUCCESS,
  GET_USER_START,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from "../constants/userConstants";
import { ONBOARD_SUCCESS } from "../constants/onboarding";

const initialState = {
  user: null,
  isLogging: false,
  loginErrorMsg: null,

  isSigning: false,
  siginigErrorMsg: null,

  isVerifying: false,
  verifyErrorMsg: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLogging: true };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLogging: false };
    case LOGIN_FAILED:
      return { ...state, isLogging: false, loginErrorMsg: action.payload };

    case SIGNUP_START:
      return { ...state, isSigning: true };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, isSigning: false };
    case SIGNUP_FAILED:
      return { ...state, isSigning: false, siginigErrorMsg: action.payload };

    case VERIFY_START:
      return { ...state, isVerifying: true };
    case VERIFY_FAILED:
      return {
        ...state,
        isVerifying: false,
        siginigErrorMsg: action.payload,
      };
    case VERIFY_SUCCESS:
      return { ...state, isVerifying: false };

    case ONBOARD_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };

    case GET_USER_START:
      return { ...state, isUserLoading: true };
    case GET_USER_FAILED:
      return {
        ...state,
        isUserLoading: false,
        userData: { ...state.user, ...action.payload },
      };
    case GET_USER_SUCCESS:
      return { ...state, isUserLoading: false };

    default:
      return { ...state };
  }
}
