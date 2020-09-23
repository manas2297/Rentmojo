import { put, all, call, takeLatest } from "redux-saga/effects";
import { getUsersAPI } from "../api/api.blog";
import { GET_USERS_SUCCESS, GET_USERS_FAILED, GET_USERS_START } from "../containers/home/constants";

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

export function* watchCaseSaga(){
    yield takeLatest(GET_USERS_START, getUsersSaga);
}

export default function* rootSaga() {
    yield all([loadSaga(), watchCaseSaga()]);
}
