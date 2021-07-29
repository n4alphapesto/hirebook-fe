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
  GET_USER_DATA,
  getUserDataApi,
} from "./ducks/user";
import {
  GET_ALL_JOBS,
  GET_JOB,
  GET_JOB_BY_ID,
  ADD_JOB,
  APPLY_JOB,
  GET_JOB_APPLICANT,
  getAllJobsApi,
  getJobsApi,
  getJobByIdApi,
  applyJobApi,
  addJobApi,
  jobApplicantApi,
} from "./ducks/jobs";
import {
  JOBSEEKER_ONBOARD,
  RECRUITER_ONBOARD,
  recruitOnBoardApi,
  seekerOnBoardApi,
} from "./ducks/onboarding";
import { UPLOAD, uploadApi } from "./ducks/upload";
export default function* mainSaga() {
  yield takeEvery(RESEND_OTP.ON_REQUEST, resendOtpApi);
  yield takeLatest(VERIFY_USER.ON_REQUEST, verifyOTPApi);
  yield takeLatest(USER_LOGIN.ON_REQUEST, loginApi);
  yield takeLatest(GET_USER_DATA.ON_REQUEST, getUserDataApi);
  yield takeLatest(GET_ALL_JOBS.ON_REQUEST, getAllJobsApi);
  yield takeLatest(GET_JOB.ON_REQUEST, getJobsApi);
  yield takeLatest(GET_JOB_BY_ID.ON_REQUEST, getJobByIdApi);
  yield takeEvery(APPLY_JOB.ON_REQUEST, applyJobApi);
  yield takeEvery(ADD_JOB.ON_REQUEST, addJobApi);
  yield takeEvery(REGISTER_USER.ON_REQUEST, registerApi);
  yield takeEvery(JOBSEEKER_ONBOARD.ON_REQUEST, seekerOnBoardApi);
  yield takeEvery(RECRUITER_ONBOARD.ON_REQUEST, recruitOnBoardApi);
  yield takeEvery(UPLOAD.ON_REQUEST, uploadApi);
  yield takeEvery(GET_JOB_APPLICANT.ON_REQUEST, jobApplicantApi);
}
