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
} from "./ducks/user";
import {
  GET_JOB,
  GET_JOB_BY_ID,
  ADD_JOB,
  APPLY_JOB,
  GET_JOB_APPLICANT,
  getJobsApi,
  getJobByIdApi,
  applyJobApi,
  addJobApi,
  jobApplicantApi,
} from "./ducks/jobs";

import { UPLOAD, uploadApi } from "./ducks/upload";

export default function* mainSaga() {
  yield takeEvery(RESEND_OTP.ON_REQUEST, resendOtpApi);
  yield takeLatest(VERIFY_USER.ON_REQUEST, verifyOTPApi);
  yield takeLatest(GET_USER.ON_REQUEST, getUserApi);
  yield takeLatest(USER_LOGIN.ON_REQUEST, loginApi);
  yield takeLatest(GET_JOB.ON_REQUEST, getJobsApi);
  yield takeLatest(GET_JOB_BY_ID.ON_REQUEST, getJobByIdApi);
  yield takeEvery(APPLY_JOB.ON_REQUEST, applyJobApi);
  yield takeEvery(ADD_JOB.ON_REQUEST, addJobApi);
  yield takeEvery(REGISTER_USER.ON_REQUEST, registerApi);
  yield takeEvery(SAVE_SEEKER_PROFILE.ON_REQUEST, saveSeekerProfile);
  yield takeEvery(SAVE_RECRUITER_PROFILE.ON_REQUEST, saveRecruiterApi);
  yield takeEvery(UPLOAD.ON_REQUEST, uploadApi);
  yield takeEvery(GET_JOB_APPLICANT.ON_REQUEST, jobApplicantApi);
  yield takeEvery(GET_USER.ON_REQUEST, getUserApi);
}
