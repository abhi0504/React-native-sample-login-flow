import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import cartReducer from './consumer/reducers/cartReducer';

import latlngreducer from './consumer/reducers/latlngreducer';
import ordersReducer from './consumer/reducers/ordersReducer';
import productReducer from './consumer/reducers/productReducer';
import sordersReducer from './seller/reducers/ordersReducers';
import sproductsReducer from './seller/reducers/productReducers'

const initialState = {};

const middleware = [thunk]

const reducers = combineReducers({
    latlng:latlngreducer,
    cartItems:cartReducer,
    orders:ordersReducer,
    sorders: sordersReducer,
    sproducts: sproductsReducer,
    allProducts : productReducer
})

const store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))

export default store;