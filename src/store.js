import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import academiesReducer from './reducers/reducers';

const initState = {}

const rootReducer = combineReducers({
  academies: academiesReducer
})

const store = createStore(rootReducer, initState, applyMiddleware(thunk))

export default store