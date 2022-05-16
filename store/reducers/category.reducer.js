 import { CATEGORIES } from "../../data/categories";
 import { SELECT_CATEGORY } from "../action/category.action";




const initialState= {
    categories: CATEGORIES,
    selected:null
}

const CategoryReducer = (state = initialState, action) =>{
    switch (action.type){
        case SELECT_CATEGORY:
            console.log ("reducer" + action.categoryID)
            const indexCategory = state.categories.findIndex (cat =>cat.id === action.categoryID);
            if (indexCategory===-1) return state;
            return {...state, selected: state.categories[indexCategory]};
            default:
                return state;
    }
}


export default CategoryReducer   