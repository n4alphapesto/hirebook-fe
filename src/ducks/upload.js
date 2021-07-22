import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import CONST from '../utils/constants';
//User Actions
export const UPLOAD = {
    ON_REQUEST: 'UPLOAD_REQUEST',
    ON_SUCCESS: 'UPLOAD_SUCCESS',
    ON_ERROR: 'UPLOAD_ERROR'
}

const initialState = {
    isUploading: false,
    uploadErrMsg: false

};
export default function uploadReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPLOAD.ON_REQUEST:
            return { ...state, isUploading: true, uploadErrMsg: null };
        case UPLOAD.ON_SUCCESS:
            return { ...state, isUploading: 'done', uploadErrMsg: payload };
        case UPLOAD.ON_ERROR:
            return { ...state, isUploading: false, uploadErrMsg: payload };
        default:
            return { ...state };
    }
};

export function upload(payload) {
    return {
        type: UPLOAD.ON_REQUEST,
        payload
    };
}

export function* uploadApi({ payload }) {
    try {
        const response = yield call(axios, {
            method: 'POST',
            url: `${CONST.BASE_URL + CONST.FILE_UPLOAD_URL}`,
            data: payload
        });
        const data = response.data;
        yield put({
            type: UPLOAD.ON_SUCCESS,
            payload: data
        });
    } catch (e) {
        yield put({ type: UPLOAD.ON_ERROR, payload: e.response });
    }
}