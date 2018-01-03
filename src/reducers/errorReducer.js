import { errorActions } from 'actions';

const defaultState = {
  errorType: {},
  isOpen: false,
};

export default function errorManager(state = defaultState, action) {
  switch (action.type) {
    case errorActions.FETCH_DISCO_DATA_FAILED:
      return {
        ...state,
        errorType: action.e,
        isOpen: true,
      };
    case errorActions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
