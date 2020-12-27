import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducer/RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const enhancer= [applyMiddleware(thunk),composeWithDevTools()]
const store = createStore(RootReducer,compose(...enhancer))

export default store
