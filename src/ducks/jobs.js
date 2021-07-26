import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import CONST from "../utils/constants";
//User Actions
export const GET_ALL_JOBS = {
  ON_REQUEST: "GET_ALL_JOBS_REQUEST",
  ON_SUCCESS: "GET_ALL_JOBS_SUCCESS",
  ON_ERROR: "GET_ALL_JOBS_ERROR",
};

export const GET_JOB = {
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

export const GET_JOB_APPLICANT = {
  ON_REQUEST: "GET_JOB_APPLICANT_REQUEST",
  ON_SUCCESS: "GET_JOB_APPLICANT_SUCCESS",
  ON_ERROR: "GET_JOB_APPLICANT_ERROR",
};

const initialState = {
  jobList: [],
  jobsFetching: false,
  recruitStats: CONST.DEFAULT_RECRUITER_STATS,
  isApplying: false,
  isJobPosting: false,
  crJob: {},
  fetchingCrJob: false,
  crJobApplicant: {},
  isjobApFetching: false,
  jobseekerStats: CONST.DEFAULT_JOBSEEKER_STATS,
};

export default function jobReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_JOBS.ON_REQUEST:
      return {
        ...state,
        jobsFetching: true,
        jobList: [],
        jobseekerStats: CONST.DEFAULT_JOBSEEKER_STATS,
      };
    case GET_ALL_JOBS.ON_SUCCESS:
      return {
        ...state,
        jobsFetching: "done",
        jobList: payload.data,
        jobseekerStats: payload.jobseekerStats,
      };
    case GET_ALL_JOBS.ON_ERROR:
      return { ...state, jobsFetching: false, jobList: [] };
    case GET_JOB.ON_REQUEST:
      return {
        ...state,
        jobsFetching: true,
        jobList: [],
        recruitStats: CONST.DEFAULT_RECRUITER_STATS,
      };
    case GET_JOB.ON_SUCCESS:
      return {
        ...state,
        jobsFetching: "done",
        jobList: payload.data,
        recruitStats: payload.recruitStats,
      };
    case GET_JOB.ON_ERROR:
      return { ...state, jobsFetching: false, jobList: [] };
    case APPLY_JOB.ON_REQUEST:
      return { ...state, isApplying: true };
    case APPLY_JOB.ON_SUCCESS:
      return { ...state, isApplying: "done" };
    case APPLY_JOB.ON_ERROR:
      return { ...state, isApplying: false };
    case ADD_JOB.ON_REQUEST:
      return { ...state, isJobPosting: true };
    case ADD_JOB.ON_SUCCESS:
      return { ...state, isJobPosting: "done" };
    case ADD_JOB.ON_ERROR:
      return { ...state, isJobPosting: false };
    case GET_JOB_BY_ID.ON_REQUEST:
      return { ...state, fetchingCrJob: true, crJob: {} };
    case GET_JOB_BY_ID.ON_SUCCESS:
      return { ...state, fetchingCrJob: "done", crJob: payload };
    case GET_JOB_BY_ID.ON_ERROR:
      return { ...state, fetchingCrJob: false, crJob: {} };
    case GET_JOB_APPLICANT.ON_REQUEST:
      return { ...state, isjobApFetching: true, crJobApplicant: {} };
    case GET_JOB_APPLICANT.ON_SUCCESS:
      return { ...state, isjobApFetching: "done", crJobApplicant: payload };
    case GET_JOB_APPLICANT.ON_ERROR:
      return { ...state, isjobApFetching: false, crJobApplicant: {} };
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
    type: GET_JOB.ON_REQUEST,
    payload,
  };
}

export function getJobApplicant(payload) {
  return {
    type: GET_JOB_APPLICANT.ON_REQUEST,
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

export function getJobById(payload) {
  return {
    type: GET_JOB_BY_ID.ON_REQUEST,
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
  const {
    user: { userDetails },
  } = yield select();
  const option = {
    postedBy: userDetails.id,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.JOB_LIST}`,
      data: option,
    });
    const data = response.data?.data;
    let recruitStats = [
      {
        title: "Jobs Posted",
        value: data.count,
      },
      {
        title: "Vacancies",
        value: data?.jobs?.reduce((aux, cr) => aux + cr.vacancies, 0),
      },
      {
        title: "In Progress",
        value: 0,
      },
    ];
    yield put({
      type: GET_JOB.ON_SUCCESS,
      payload: {
        data: data.jobs,
        recruitStats,
      },
    });
  } catch (e) {
    yield put({ type: GET_JOB.ON_ERROR, payload: e.response });
    // enqueueSnackbar(error.message, { variant: "error" });
  }
}

export function* getJobByIdApi({ payload }) {
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${CONST.BASE_URL + CONST.JOB_URL.JOB_BY_ID + payload}`,
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
  const options = {
    jobId: payload.jobId,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.APPLY_JOB}`,
      data: options,
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

export function* jobApplicantApi({ payload }) {
  const options = {
    jobId: payload,
  };
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${CONST.BASE_URL + CONST.JOB_URL.JOB_APPLICANT}`,
      data: options,
    });
    const data = response.data?.data;
    yield put({
      type: GET_JOB_APPLICANT.ON_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: GET_JOB_APPLICANT.ON_ERROR, payload: e.response });
  }
}
