export const FETCH_DISCO_DATA_REQUEST = 'FETCH_DISCO_DATA_REQUEST';
export const FETCH_DISCO_DATA_SUCCESS = 'FETCH_DISCO_DATA_SUCCESS';

export function fetchDataRequest(url) {
  return {
    type: FETCH_DISCO_DATA_REQUEST,
    url,
  };
}
