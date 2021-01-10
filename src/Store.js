import {createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducer/RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension' 

const composeEnhancers = [applyMiddleware(thunk),composeWithDevTools()]

const Store = createStore(RootReducer,compose(...composeEnhancers))

export default Store