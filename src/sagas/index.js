import {
  put,
  fork,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';
import {
  apiActions,
  errorActions,
  mainActions,
} from 'actions';

async function discogsSearch(url) {
  const response = await fetch(url);
  return response.json();
}

function* searchApplication() {
  try {
    yield put({ type: mainActions.BUTTON_PRESSED_ASYNC });
  } catch (e) {
    yield put({ type: errorActions.SEARCH_APPLICATION_ERROR });
  }
}

function* fetchDiscogsData(action) {
  try {
    const fetchResonse = yield call(discogsSearch, action.url);
    yield put({ type: apiActions.FETCH_DISCO_DATA_SUCCESS, fetchResonse });
  } catch (e) {
    yield put({ type: errorActions.FETCH_DISCO_DATA_FAILED, e });
  }
}

function* addPerson(action) {
  const { data, isFilled } = action;
  if (isFilled) {
    yield put({ type: mainActions.ADD_PERSON, data });
  }
}

function* searchRequest() {
  try {
    yield takeLatest(mainActions.SEARCH_APPLICATION, addPerson);
    yield takeLatest(mainActions.SEARCH_APPLICATION, searchApplication);
  } catch (e) {
    yield put({ type: errorActions.SEARCH_APPLICATION_ERROR });
  }
}

function* fetchRequest(action) {
  try {
    yield takeLatest(apiActions.FETCH_DISCO_DATA_REQUEST, fetchDiscogsData);
  } catch (e) {
    yield put({ type: errorActions.SEARCH_APPLICATION_ERROR });
  }
}

/* export default function* rootSaga() {
  yield fork(searchRequest);
  yield fork(fetchRequest);
} */

export default function* rootSaga() {
  yield all([
    fork(searchRequest),
    fork(fetchRequest),
  ]);
}
