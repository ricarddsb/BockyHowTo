export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_DISCO_DATA_FAILED = 'FETCH_DISCO_DATA_FAILED';
export const SEARCH_APPLICATION_ERROR = 'SEARCH_APPLICATION_ERROR';

export function errorFetchDiscoData() {
  return {
    type: FETCH_DISCO_DATA_FAILED,
  };
}

export function errorOtherApiAction() {
  return {
    type: SEARCH_APPLICATION_ERROR,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
