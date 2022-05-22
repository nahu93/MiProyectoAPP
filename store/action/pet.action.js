import * as FileSystem from 'expo-file-system';

export const ADD_PET = 'ADD_PET'

export const addPet = (title,image) => {

    return async dispatch => {
        const fileName = image.split('/').pop();
        const path= FileSystem.documentDirectory + fileName;

        try{
            await FileSystem.moveAsync ({
                from:image,
                to:path
            })
        } catch (err) {
            throw err;
        }
        dispatch ({type:ADD_PET, payload: {title,image:path}});
    }

}