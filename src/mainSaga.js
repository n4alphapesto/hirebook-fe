import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  USER_LOGIN,
  VERIFY_USER,
  RESEND_OTP,
  REGISTER_USER,
  registerApi,
  resendOtpApi,
  verifyOTPApi,
  loginApi,
  SAVE_SEEKER_PROFILE,
  SAVE_RECRUITER_PROFILE,
  saveSeekerProfile,
  saveRecruiterApi,
  GET_USER,
  getUserApi,
  LOG_OUT,
  logoutAction,
} from "./ducks/user";
import {
  GET_JOBS,
  GET_JOB_BY_ID,
  ADD_JOB,
  APPLY_JOB,
  getJobsApi,
  getJobByIdApi,
  applyJobApi,
  addJobApi,
  NOT_INTERESTED,
  markJobUnInterested,
  SCHEDULE_INTERVIEW,
  SEND_OFFER,
  SEND_REGRET,
  scheduleInterViewApi,
  sendOfferApi,
  sendRegretApi,
} from "./ducks/jobs";

import { UPLOAD, uploadApi } from "./ducks/upload";

export default function* mainSaga() {
  yield takeEvery(RESEND_OTP.ON_REQUEST, resendOtpApi);
  yield takeLatest(VERIFY_USER.ON_REQUEST, verifyOTPApi);
  yield takeLatest(GET_USER.ON_REQUEST, getUserApi);
  yield takeLatest(USER_LOGIN.ON_REQUEST, loginApi);
  yield takeLatest(GET_JOBS.ON_REQUEST, getJobsApi);
  yield takeLatest(GET_JOB_BY_ID.ON_REQUEST, getJobByIdApi);
  yield takeLatest(APPLY_JOB.ON_REQUEST, applyJobApi);
  yield takeLatest(SCHEDULE_INTERVIEW.ON_REQUEST, scheduleInterViewApi);
  yield takeLatest(SEND_OFFER.ON_REQUEST, sendOfferApi);
  yield takeLatest(SEND_REGRET.ON_REQUEST, sendRegretApi);
  yield takeLatest(NOT_INTERESTED.ON_REQUEST, markJobUnInterested);
  yield takeEvery(ADD_JOB.ON_REQUEST, addJobApi);
  yield takeEvery(REGISTER_USER.ON_REQUEST, registerApi);
  yield takeEvery(SAVE_SEEKER_PROFILE.ON_REQUEST, saveSeekerProfile);
  yield takeEvery(SAVE_RECRUITER_PROFILE.ON_REQUEST, saveRecruiterApi);
  yield takeEvery(UPLOAD.ON_REQUEST, uploadApi);
  yield takeEvery(GET_USER.ON_REQUEST, getUserApi);
  yield takeEvery(LOG_OUT.ON_REQUEST, logoutAction);
}
