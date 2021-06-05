import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';

import latlngreducer from './reducers/latlngreducer';

const initialState = {};

const middleware = [thunk]

const reducers = combineReducers({
    latlng:latlngreducer
})

const store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))

export default store;