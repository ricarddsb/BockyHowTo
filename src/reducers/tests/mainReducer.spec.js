import mainReducer from '../mainReducer';

describe('mainReducer ', () => {

  const defaultState = {
    items: [],
    timesClicked: 0,
  };

  const defaultState2 = {
    items: [],
    timesClicked: 0,
    close: false,
  };

  const addPerson = {
    type: 'ADD_PERSON',
    data: 'Test data',
  };

  const buttonPressedAsync = {
    type: 'BUTTON_PRESSED_ASYNC',
  };

  const closeApplication = {
    type: 'CLOSE_APPLICATION',
  };

  const deleteUser = {
    type: 'DELETE_USER',
    data: 'Test data',
  };

  it('should create initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(defaultState);
  });

  it('ADD_PERSON', () => {
    expect(mainReducer(defaultState, addPerson).items).toEqual(["Test data"]);
  });

  it('BUTTON_PRESSED_ASYNC', () => {
    expect(mainReducer(defaultState, buttonPressedAsync).timesClicked).toEqual(1);
  });

  it('CLOSE_APPLICATION', () => {
    expect(mainReducer(defaultState2, closeApplication).close).toEqual(true);
  });

  it('DELETE_USER', () => {
    mainReducer(defaultState, addPerson);
    expect(mainReducer(defaultState, deleteUser).items).toHaveLength(0);
  });

})
