import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import cartReducer from './consumer/reducers/cartReducer';

import latlngreducer from './consumer/reducers/latlngreducer';
import ordersReducer from './consumer/reducers/ordersReducer';

const initialState = {};

const middleware = [thunk]

const reducers = combineReducers({
    latlng:latlngreducer,
    cartItems:cartReducer,
    orders:ordersReducer
})

const store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))

export default store;