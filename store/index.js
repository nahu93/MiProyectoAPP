import {createStore,combineReducers} from 'redux'

import CategoryReducer from './reducers/category.reducer'
import AlimentoReducer from './reducers/alimentos.reducer'


const RootReducer = combineReducers ({
    categories: CategoryReducer,
    alimento: AlimentoReducer
})

export default createStore (RootReducer)