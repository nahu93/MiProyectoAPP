import * as FileSystem from 'expo-file-system';

export const ADD_PET = 'ADD_PET'

export const addPet = (title,image) => {

    return async dispatch => {
        console.log ("dispatching ...")
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;
        console.log('-----------------------')
        console.log(image)
        console.log(fileName)
        console.log(Path)
        console.log('-----------------------')

        try{
            await FileSystem.moveAsync ({
                from:image,
                to:Path
            })
        } catch (err) {
            throw err;
        }
        dispatch ({type:ADD_PET, payload: {title,image: Path}});
        
    }

}