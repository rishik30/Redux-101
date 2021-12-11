import {combineReducers} from 'redux'
import { TYPES } from './action'

const INITIAL_STORE_DATA = {counter: 0, key: 10}

const counterReducer = (state = INITIAL_STORE_DATA, action) => {
  switch(action.type) {
    case TYPES.INCREMENT: {
      return {...state, counter: state.counter + 1}
    }
    case TYPES.DECREMENT: {
      return {...state, counter: state.counter ? state.counter - 1 : 0}
    }
    default: {
      return state
    }
  }
}

const rootReducer = combineReducers({
  counterReducer
}) // {counterReducer: {...data}}

export {rootReducer}