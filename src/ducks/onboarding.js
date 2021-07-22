import { call, put } from 'redux-saga/effects';
import axios from 'axios';
//import { useSnackbar } from "notistack";
//const { // enqueueSnackbar } = useSnackbar();

import CONST from '../utils/constants';
//User Actions
export const RECRUITER_ONBOARD = {
    ON_REQUEST: 'RECRUITER_ONBOARD_REQUEST',
    ON_SUCCESS: 'RECRUITER_ONBOARD_SUCCESS',
    ON_ERROR: 'RECRUITER_ONBOARD_ERROR'
}

export const JOBSEEKER_ONBOARD = {
    ON_REQUEST: 'JOBSEEKER_ONBOARD_REQUEST',
    ON_SUCCESS: 'JOBSEEKER_ONBOARD_SUCCESS',
    ON_ERROR: 'JOBSEEKER_ONBOARD_ERROR'
}

const initialState = {
    isRecruiterOnBoarding: false,
    isJobSeekerOnBoarding: false,
    recruitOnBoardErrMsg: null,
    seekerOnBoardErrMsg: null

};
export default function onBoardReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RECRUITER_ONBOARD.ON_REQUEST:
            return { ...state, isRecruiterOnBoarding: true, recruitOnBoardErrMsg: null };
        case RECRUITER_ONBOARD.ON_SUCCESS:
            return { ...state, isRecruiterOnBoarding: 'done', recruitOnBoardErrMsg: payload };
        case RECRUITER_ONBOARD.ON_ERROR:
            return { ...state, isRecruiterOnBoarding: false, recruitOnBoardErrMsg: payload };
        case JOBSEEKER_ONBOARD.ON_REQUEST:
            return { ...state, isJobSeekerOnBoarding: true, seekerOnBoardErrMsg: null };
        case JOBSEEKER_ONBOARD.ON_SUCCESS:
            return { ...state, isJobSeekerOnBoarding: true, seekerOnBoardErrMsg: null };
        case JOBSEEKER_ONBOARD.ON_ERROR:
            return { ...state, isJobSeekerOnBoarding: true, seekerOnBoardErrMsg: null };
        default:
            return { ...state };
    }
};


export function onBoardRecruiter(payload) {
    return {
        type: RECRUITER_ONBOARD.ON_REQUEST,
        payload
    };
}

export function onBoardJobSeeker(payload) {
    return {
        type: RECRUITER_ONBOARD.ON_REQUEST,
        payload
    };
}


export function* recruitOnBoardApi({ payload }) {
    // const { user: { userDetails } } = yield select();
    try {
        const response = yield call(axios, {
            method: 'POST',
            url: `${CONST.BASE_URL + CONST.ON_BOARD_URL.RECRUITER}`,
            data: payload
        });
        const data = response.data;
        // enqueueSnackbar("Profile saved.", { variant: "success" });
        yield put({
            type: RECRUITER_ONBOARD.ON_SUCCESS,
            payload: data
        });
    } catch (e) {
        yield put({ type: RECRUITER_ONBOARD.ON_ERROR, payload: e.response });
        // enqueueSnackbar("Error saving profile.", { variant: "error" });
    }
}
export function* seekerOnBoardApi({ payload }) {
    // const { user: { userDetails } } = yield select();
    try {
        const response = yield call(axios, {
            method: 'POST',
            url: `${CONST.BASE_URL + CONST.ON_BOARD_URL.JOBSEEKER}`,
            data: payload
        });
        const data = response.data;
        // enqueueSnackbar("Profile saved.", { variant: "success" });
        yield put({
            type: RECRUITER_ONBOARD.ON_SUCCESS,
            payload: data
        });
    } catch (e) {
        yield put({ type: RECRUITER_ONBOARD.ON_ERROR, payload: e.response });
        // enqueueSnackbar("Error saving profile.", { variant: "error" });
    }
}