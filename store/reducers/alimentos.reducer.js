import { AlimentoBalanceado } from "../../data/AlimentoBalanceado";
import { SELECT_ALIMENTO,FILTERED_ALIMENTO   } from "../action/alimento.action";

const initialState= {
    alimentos: AlimentoBalanceado,
    filteredAlimentos:[],
    selected:null
}


const AlimentoReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_ALIMENTO:
             console.log ("SELECT_ALIMENTO"+ action.alimentoID)
            return {
                ...state,
                selected : state.alimentos.find (alimento => alimento.id === action.alimentoID)
            }

        case FILTERED_ALIMENTO:
            return {
                ...state,
                filteredAlimento: state.alimentos.filter (alimento => alimento.category === action.categoryID)
            }
            default:
                return state;
    }

}

export default AlimentoReducer;