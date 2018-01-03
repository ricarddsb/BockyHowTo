export const ADD_PERSON = 'ADD_PERSON';
export const BUTTON_PRESSED_ASYNC = 'BUTTON_PRESSED_ASYNC';
export const CLOSE_APPLICATION = 'CLOSE_APPLICATION';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_APPLICATION = 'SEARCH_APPLICATION';

export function closeApplication() {
  return {
    type: CLOSE_APPLICATION,
  };
}

export function deleteUser(item) {
  return {
    type: DELETE_USER,
    item,
  };
}

export function searchApplication(data, isFilled) {
  return {
    type: SEARCH_APPLICATION,
    data,
    isFilled,
  };
}
