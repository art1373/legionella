import api from '../../api';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {FETCH_PICTURES} from './constants';
import {setPictures} from './actions';
import {logError} from '../../utils/logs';

/************************* FETCH PRODUCTS *************************/
function* fetchPicturesSaga(action: any) {
  try {
    const resp = yield call(api.pictures.fetchImages, action.offset);

    const pictures = resp?.data ?? [];
    yield put(setPictures(pictures));

    if (action.onSuccess) {
      action.onSuccess();
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
