import { mainActions } from 'actions';
import arrayHelper from 'helpers';

const defaultState = {
  items: [],
  timesClicked: 0,
};

export default function mainManager(state = defaultState, action) {
  const clickedTimes = state.timesClicked;
  switch (action.type) {
    case mainActions.BUTTON_PRESSED_ASYNC:
      return {
        ...state,
        timesClicked: clickedTimes + 1,
      };
    case mainActions.CLOSE_APPLICATION:
      return {
        ...state,
        close: !state.close,
      };
    case mainActions.DELETE_USER:
      return {
        ...state,
        items: state.items.filter(item => !arrayHelper.equalObjects(item, action.item)),
      };
    case mainActions.ADD_PERSON:
      return {
        ...state,
        items: state.items.concat(action.data),
      };
    default:
      return state;
  }
}
