import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


import CategoryReducer from './reducers/category.reducer';
import AlimentoReducer from './reducers/alimentos.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';
import AuthReducer from './reducers/auth.reducer';
import PetReducer from './reducers/pet.reducer';


const RootReducer = combineReducers ({
    categories: CategoryReducer,
    alimentos: AlimentoReducer,
    cart: CartReducer,
    order: OrderReducer,
    //auth: AuthReducer,
    lista: PetReducer,

})

export default createStore (RootReducer,applyMiddleware(thunk))