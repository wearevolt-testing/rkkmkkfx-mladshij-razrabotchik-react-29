import typeToReducer from 'type-to-reducer';

import { FETCH_ALL, CREATE_THING, UPDATE_THING, SELECT_THING_TYPE } from './../actions';
const INITIAL_STATE = {
  data: null,
  type: null
};

const ThingReducer = typeToReducer({
  [FETCH_ALL]: (state, action) => ({ ...state, data: action.payload.data }),
  [SELECT_THING_TYPE]: (state, action) => ({ ...state, type: action.payload})
  }, INITIAL_STATE);

export default ThingReducer;