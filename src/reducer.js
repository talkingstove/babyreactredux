import { createStore } from 'redux';

function reducer(state, action) {

  if (!action) {
    return state;
  }
  
  switch (action.type) {
    case 'updateExampleStateVar':

      return Object.assign({}, state, {
        exampleStateVar: action.payload.newVal
      })
      
    default:
      return state;
  }

}


const defaultState = {
  exampleStateVar: 'Inital Value'
};

export const appStore = createStore(reducer, defaultState);



