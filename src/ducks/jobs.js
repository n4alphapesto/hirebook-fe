import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import CONST from "../utils/constants";
//User Actions
export const GET_ALL_JOBS = {
  ON_REQUEST: "GET_ALL_JOBS_REQUEST",
  ON_SUCCESS: "GET_ALL_JOBS_SUCCESS",
  ON_ERROR: "GET_ALL_JOBS_ERROR",
};

export const GET_JOBS = {
  ON_REQUEST: "GET_JOB_REQUEST",
  ON_SUCCESS: "GET_JOB_SUCCESS",
  ON_ERROR: "GET_JOB_ERROR",
};

export const ADD_JOB = {
  ON_REQUEST: "ADD_JOB_REQUEST",
  ON_SUCCESS: "ADD_JOB_SUCCESS",
  ON_ERROR: "ADD_JOB_ERROR",
};

export const GET_JOB_BY_ID = {
  ON_REQUEST: "GET_JOB_BY_ID_REQUEST",
  ON_SUCCESS: "GET_JOB_BY_ID_SUCCESS",
  ON_ERROR: "GET_JOB_BY_ID_ERROR",
};

export const APPLY_JOB = {
  ON_REQUEST: "APPLY_JOB_REQUEST",
  ON_SUCCESS: "APPLY_JOB_SUCCESS",
  ON_ERROR: "APPLY_JOB_ERROR",
};

export const NOT_INTERESTED = {
  ON_REQUEST: "NOT_INTERESTED_REQUEST",
  ON_SUCCESS: "NOT_INTERESTED_SUCCESS",
  ON_ERROR: "NOT_INTERESTED_ERROR",
};

export const SCHEDULE_INTERVIEW = {
  ON_REQUEST: "SCHEDULE_INTERVIEW_REQUEST",
  ON_SUCCESS: "SCHEDULE_INTERVIEW_SUCCESS",
  ON_ERROR: "SCHEDULE_INTERVIEW_ERROR",
};

export const SEND_OFFER = {
  ON_REQUEST: "SEND_OFFER_REQUEST",
  ON_SUCCESS: "SEND_OFFER_SUCCESS",
  ON_ERROR: "SEND_OFFER_ERROR",
};

export const SEND_REGRET = {
  ON_REQUEST: "SEND_REGRET_REQUEST",
  ON_SUCCESS: "SEND_REGRET_SUCCESS",
  ON_ERROR: "SEND_REGRET_ERROR",
};

const initialState = {
  jobList: [],
  jobsFetching: false,
  recruitStats: CONST.DEFAULT_RECRUITER_STATS,
  isApplying: false,
  isJobPosting: false,
  selectdJobDetails: null,
  isFetchingSelectedJob: false,
  jobseekerStats: CONST.DEFAULT_JOBSEEKER_STATS,
  totalJobs: 0,
  isMarkingNotInterested: false,
  isSchdeulingInterview: false,
  isSendingOffer: false,
  isSendingRegret: false,
};

export default function jobReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_JOBS.ON_REQUEST:
      return {
        ...state,
        jobsFetching: true,
        jobList: [],
      };
    case GET_JOBS.ON_SUCCESS:
      return {
        ...state,
        jobsFetching: "done",
        jobList: payload.data,
        totalJobs: payload.totalJobs,
      };
    case GET_JOBS.ON_ERROR:
      return { ...state, jobsFetching: false, jobList: [] };

    case APPLY_JOB.ON_REQUEST:
      return { ...state, isApplying: true };
    case APPLY_JOB.ON_SUCCESS:
      return { ...state, isApplying: "done" };
    case APPLY_JOB.ON_ERROR:
      return { ...state, isApplying: false };

    case NOT_INTERESTED.ON_REQUEST:
      return { ...state, isMarkingNotInterested: true };
    case NOT_INTERESTED.ON_SUCCESS:
      return { ...state, isMarkingNotInterested: "done" };
    case NOT_INTERESTED.ON_ERROR:
      return { ...state, isMarkingNotInterested: false };

    case ADD_JOB.ON_REQUEST:
      return { ...state, isJobPosting: true };
    case ADD_JOB.ON_SUCCESS:
      return { ...state, isJobPosting: "done" };
    case ADD_JOB.ON_ERROR:
      return { ...state, isJobPosting: false };

    case GET_JOB_BY_ID.ON_REQUEST:
      return { ...state, isFetchingSelectedJob: true, selectdJobDetails: {} };
    case GET_JOB_BY_ID.ON_SUCCESS:
      return {
        ...state,
        isFetchingSelectedJob: "done",
        selectdJobDetails: payload,
      };
    case GET_JOB_BY_ID.ON_ERROR:
      return { ...state, isFetchingSelectedJob: false, selectdJobDetails: {} };

    case SCHEDULE_INTERVIEW.ON_REQUEST:
      return { ...state, isSchdeulingInterview: true };
    case SCHEDULE_INTERVIEW.ON_SUCCESS:
      return {
        ...state,
        isSchdeulingInterview: "done",
        selectdJobDetails: {
          ...state.selectdJobDetails,
          applicants: [
            ...state.selectdJobDetails.applicants.map((applicant) => {
              if (applicant._id === payload)
                return { ...applicant, status: "INTERVIEWING" };

              return applicant;
            }),
          ],
        },
      };
    case SCHEDULE_INTERVIEW.ON_ERROR:
      return { ...state, isSchdeulingInterview: false };
    case SEND_OFFER.ON_REQUEST:
      return { ...state, isSendingOffer: true };
    case SEND_OFFER.ON_SUCCESS:
      return {
        ...state,
        isSendingOffer: "done",
        selectdJobDetails: {
          ...state.selectdJobDetails,
          applicants: [
            ...state.selectdJobDetails.applicants.map((applicant) => {
              if (applicant._id === payload)
                return { ...applicant, status: "HIRED" };

              return applicant;
            }),
          ],
        },
      };
    case SEND_OFFER.ON_ERROR:
      return { ...state, isSendingOffer: false };
    case SEND_REGRET.ON_REQUEST:
      return { ...state, isSendingRegret: true };
    case SEND_REGRET.ON_SUCCESS:
      return {
        ...state,
        isSendingRegret: "done",
        selectdJobDetails: {
          ...state.selectdJobDetails,
          applicants: [
            ...state.selectdJobDetails.applicants.map((applicant) => {
              if (applicant._id === payload)
                return { ...applicant, status: "REJECTED" };

              return applicant;
            }),
          ],
        },
      };
    case SCHEDULE_INTERVIEW.ON_ERROR:
      return { ...state, isSendingRegret: false };
    default:
      return { ...state };
  }
}

export function getAllJobs(payload) {
  return {
    type: GET_ALL_JOBS.ON_REQUEST,
    payload,
  };
}

export function getJobs(payload) {
  return {
    type: GET_JOBS.ON_REQUEST,
    payload,
  };
}

export function addJob(payload) {
  return {
    type: ADD_JOB.ON_REQUEST,
    payload,
  };
}

export function applyJob(payload) {
  return {
    type: APPLY_JOB.ON_REQUEST,
    payload,
  };
}
export function notInterested(payload) {
  return {
    type: NOT_INTERESTED.ON_REQUEST,
    payload,
  };
}

export function getJobById(payload) {
  return {
    type: GET_JOB_BY_ID.ON_REQUEST,
    payload,
  };
}

export function scheduleInterView(payload) {
  return {
    type: SCHEDULE_INTERVIEW.ON_REQUEST,
    payload,
  };
}
export function sendOffer(payload) {
  return {
    type: SEND_OFFER.ON_REQUEST,
    payload,
  };
}
export function sendRegret(payload) {
  return {
    type: SEND_REGRET.ON_REQUEST,
    payload,
  };
}

export function* getAllJobsApi({ payload }) {
  //debugger;
  const {
    user: { userDetails },
  } = yield select();
  const option = {};
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${CONST.BASE_URL + CONST.JOB_URL.ALL_JOB_LIST}`,
    });
    const data = response.data?.data;
    //console.log(data);
    //debugger;
    let jobseekerStats = [
      {
        title: "Applied Jobs",
        value: 0,
      },
      {
        title: "Saved Jobs",
        value: 0,
      },
      {
        title: "Ongoing",
        value: 0,
      },
      {
        title: "Offers",
        value: 0,
      },
    ];
    yield put({
      type: GET_ALL_JOBS.ON_SUCCESS,
      payload: {
        data: data.jobs,
        jobseekerStats,
      },
    });
  } catch (e) {
    //debugger;
    yield put({ type: GET_ALL_JOBS.ON_ERROR, payload: e.response });
    // enqueueSnackbar(error.message, { variant: "error" });
  }
}

export function* getJobsApi({ payload }) {
  console.log(payload);
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${CONST.BASE_URL + CONST.JOB_URL.JOB_LIST}`,
      params: payload,
    });
    const data = response.data?.data;

    yield put({
      type: GET_JOBS.ON_SUCCESS,
      payload: {
        data: data.jobs,
        totalJobs: data.count,
      },
    });
  } catch (e) {
    yield put({ type: GET_JOBS.ON_ERROR, payload: e.response });
    // enqueueSnackbar(error.message, { variant: "error" });
  }
}

export function* getJobByIdApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${CONST.BASE_URL + CONST.JOB_URL.JOB_BY_ID + `/${payload}`}`,
    });
    const data = response.data?.data;
    yield put({
      type: GET_JOB_BY_ID.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: GET_JOB_BY_ID.ON_ERROR, payload: e.response });
  }
}

export function* addJobApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.ADD_JOB}`,
      data: payload,
    });
    const data = response.data?.data;
    yield put({
      type: ADD_JOB.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: ADD_JOB.ON_ERROR, payload: e.response });
  }
}

export function* applyJobApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.APPLY_JOB}`,
      data: payload,
    });
    const data = response.data?.data;
    yield put({
      type: APPLY_JOB.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: APPLY_JOB.ON_ERROR, payload: e.response });
  }
}

export function* markJobUnInterested({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.NOT_INTERESTED}`,
      data: payload,
    });
    const data = response.data?.data;
    yield put({
      type: NOT_INTERESTED.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: NOT_INTERESTED.ON_ERROR, payload: e.response });
  }
}

export function* scheduleInterViewApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.SCHEDULE_INTERVIEW}`,
      data: payload.api,
    });
    const data = response.data?.data;
    yield put({
      type: SCHEDULE_INTERVIEW.ON_SUCCESS,
      payload: payload.updateId,
    });
  } catch (e) {
    yield put({ type: SCHEDULE_INTERVIEW.ON_ERROR, payload: e.response });
  }
}
export function* sendOfferApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.SEND_OFFER}`,
      data: payload.api,
    });
    const data = response.data?.data;
    yield put({
      type: SEND_OFFER.ON_SUCCESS,
      payload: payload.updateId,
    });
  } catch (e) {
    yield put({ type: SEND_OFFER.ON_ERROR, payload: e.response });
  }
}
export function* sendRegretApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.SEND_REGRET}`,
      data: payload.api,
    });
    const data = response.data?.data;
    yield put({
      type: SEND_REGRET.ON_SUCCESS,
      payload: payload.updateId,
    });
  } catch (e) {
    yield put({ type: SEND_REGRET.ON_ERROR, payload: e.response });
  }
}
