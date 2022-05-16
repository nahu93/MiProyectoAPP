import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


import CategoryReducer from './reducers/category.reducer';
import AlimentoReducer from './reducers/alimentos.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    alimentos: AlimentoReducer,
    cart: CartReducer,
    order: OrderReducer,
})

export default createStore (RootReducer,applyMiddleware(thunk))