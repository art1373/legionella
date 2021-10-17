import api from "../../api";
import { call, delay, put, select, takeLatest } from "@redux-saga/core/effects";
import { FetchPicturesAction, FETCH_PICTURES } from "./constants";
import { setPictures } from "./actions";
import { logError } from "../../utils/logs";
import { getOffset } from "./selectors";

/************************* FETCH PRODUCTS *************************/
function* fetchPicturesSaga(action: FetchPicturesAction) {
  try {
    const offset = yield select(getOffset);
    const resp = yield call(api.pictures.fetchImages, offset);

    const pictures = resp?.data ?? [];
    yield delay(2000);
    if (pictures?.length) yield put(setPictures(pictures));

    if (action.onSucces) {
      action.onSucces();
    }
  } catch (e) {
    if (action.onFailure) {
      action.onFailure();
    }
    logError(e);
  }
}

function* watchFetchPictures() {
  yield takeLatest(FETCH_PICTURES, fetchPicturesSaga);
}

export const pictureSagas = [watchFetchPictures()];
