import { CONFIRM_CART, REMOVE_ITEM, ADD_ITEM } from "../action/cart.action";


const initialState = {
    items:[],
    total: 0
};


const sumaTotal = (list) => list
.map(item => item.quantity * item.precio) 
.reduce ((a,b) => a + b , 0);

const CartReducer = (state = initialState, action ) =>{

    switch (action.type) {
        case ADD_ITEM:

        let updateCart = [];

        if (state.items.find (item => item.id === action.item.id)) {
            updateCart = state.items.map ( item => {
                if(item.id === action.item.id) item.quantity++;
                return item; 
            }) 
        } else {
            const item = {...action.item, quantity:1};
            updateCart = [...state.items, item] ;
        }

        return {
            ...state,
            items : updateCart,
            total : sumaTotal (updateCart),

        }

        case REMOVE_ITEM:
            const filteredCart = state.items.filter (item => item.id !== action.itemID);

            return {
                ...state,
                items : filteredCart,
                total: sumaTotal (filteredCart),

            }
        

        case CONFIRM_CART :

              return {
                  ...state, item: [], total: 0
              }

              default:
                  return state;

    }




} 


export default CartReducer;