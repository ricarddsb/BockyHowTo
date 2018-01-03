import errorReducer from '../errorReducer';

describe('errorReducer ', () => {
  const defaultState = {
    errorType: {},
    isOpen: false,
  };

  const closeModal = {
    type: 'CLOSE_MODAL',
  };

  const fetchDiscoDataFailed = {
    type: 'FETCH_DISCO_DATA_FAILED',
    e: 'error',
  };

  it('should create initial state', () => {
    expect(errorReducer(undefined, {})).toEqual(defaultState);
  });

  it('CLOSE_MODAL', () => {
    expect(errorReducer(closeModal, closeModal).isOpen).toBe(false);
  });

  it('FETCH_DISCO_DATA_FAILED', () => {
    expect(errorReducer(fetchDiscoDataFailed, {}).e).toEqual('error');
    expect(errorReducer(fetchDiscoDataFailed, fetchDiscoDataFailed).isOpen).toBe(true);
  });
})
