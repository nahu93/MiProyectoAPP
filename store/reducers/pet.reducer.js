import { ADD_PET } from "../action/pet.action";
import Pet from "../../Models/pets";


const initialState = {
    pets : []
    
}
console.log (initialState)

 const PetReducer = (state= initialState,action) =>{
    console.log ("Reducer...");
    switch (action.type) {
        case ADD_PET: 
        console.log ("ADD_PET");
        const newPet = new Pet (Date.now(), action.payload.title, action.payload.image);

        return {
            ...state,
            pets: state.pets.concat (newPet),
        }
        
        default :
        return state
    }
}


export default PetReducer