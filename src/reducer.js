import { createStore } from 'redux';

function reducer(state, action) {

  if (!action) {
    return state;
  }
  
  switch (action.type) {
    case 'yourAction':

      return Object.assign({}, state, {
        stateValue: 'yourNewValue'
      })
      
    default:
      return state;
  }

}


const defaultState = {
  stateValue: 'initalValue'
};

export const appStore = createStore(reducer, defaultState);



