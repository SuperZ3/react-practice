import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      state = state + 1;
      break;
    case 'two':
      state = state - 2;
      break;
    default:
      state = 0;
      break;
  }
  return state
}

const store = createStore(reducer);

export default store;
