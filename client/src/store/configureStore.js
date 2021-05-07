import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'

import profileReducer from '../reducers/profileReducer'



const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        profile:profileReducer
       
    }),applyMiddleware(thunk))
    return store
}

export default configureStore