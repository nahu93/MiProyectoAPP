import { ADD_PET } from "../action/pet.action";
import Pet from "../../Models/pets";


const initialState = {
    pets : []
}

export default (state= initialState,action) =>{
    switch (action.type) {
        case ADD_PET: 
        console.log ("ADD_PET");
        const newPet = new Pet(Date.now(), action.payload.title, action.payload.image);

        return {
            ...state,
            pets: state.pets.concat (newPet),
        }
        default :
        return state
    }
}