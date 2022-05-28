import { ADD_PET } from "../action/pet.action";
import Pet from "../../Models/pets";


const initialState = {
    pets : []
    
}


 const PetReducer = (state = initialState,action) =>{
    console.log (state);
    switch (action.type) {
        case ADD_PET: 
        console.log ("ADD_PET");
        const newPet = new Pet (Date.now(), action.payload.title, action.payload.image);
        console.log (newPet)
        return {
            ...state,
            pets: state.pets.concat (newPet) ,
             
            
        }
        
        default :
        return state

       
    }
    
}

console.log(initialState)

export default PetReducer