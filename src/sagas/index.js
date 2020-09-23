import { put, all, call, takeLatest } from "redux-saga/effects";
import { getUsersAPI, getPostByIdAPI } from "../api/api.blog";
import { GET_USERS_SUCCESS, GET_USERS_FAILED, GET_USERS_START } from "../containers/home/constants";
import { GET_USER_POST_SUCCESS, GET_USER_POST_FAILED, GET_USER_POST_START } from "../containers/Posts/constant";

export const loadSaga = () => {
    console.log("Sagas!");
};
export function* getUsersSaga(action) {
    try {
        const params = action.payload;
        const responseBody = yield call(getUsersAPI, params);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: responseBody,
        });
    } catch (e) { 
        yield put({
            type: GET_USERS_FAILED,
        });
    }
};
export function* getPostsSaga(action) {
    try {
        const params = action.payload;
        const responseBody = yield call(getPostByIdAPI, params);
        yield put({
            type: GET_USER_POST_SUCCESS,
            payload: responseBody,
        });
    } catch (e) {
        yield put({
            type: GET_USER_POST_FAILED,
        });
    }
}

export function* watchUserSaga(){
    yield takeLatest(GET_USERS_START, getUsersSaga);
}
export function* watchPostSaga(){
    yield takeLatest(GET_USER_POST_START, getPostsSaga);
}

export default function* rootSaga() {
    yield all([
        loadSaga(),
        watchUserSaga(),
        watchPostSaga()
    ]);
}
