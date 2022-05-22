import React, {useState}from "react";
import {View,Text,Button,TextInput,ScrollView,StyleSheet} from "react-native"
import { useDispatch } from "react-redux";
import { COLORS } from "../constants/colors";
import ImageSelector from "../components/ImageSelector";
import { addPet } from "../store/action/pet.action";



const NewPetScreen = ({navigation}) => {
    const  dispatch = useDispatch();
    const [title,setTitle ]= useState ('');
    const [ image,setImage] = useState ('');


    const handlerTitleChange = text => setTitle (text);
    const handlerImageChange = img => setImage (img)
    const handlerSave = () => {
        dispatch (addPet(title,image));
        navigation.navigate('Home')
    }
    return (
       <ScrollView>
           <View style={styles.container}>
               <Text style={styles.label }>Nombre de tu mascota</Text>
               <TextInput style={styles.input} onChangeText={handlerTitleChange}></TextInput>
               {<ImageSelector onImage={handlerImageChange}/>}
               <Button title="Guardar mascota" color={COLORS.accent} onPress={handlerSave}/>
               
           </View>
       </ScrollView>
    )


}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        margin:30
    
    },
    label:{
        fontSize:18,
        marginBottom:16,
    },
    input:{
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        marginBottom:16,
        paddingHorizontal:2,
        paddingVertical:4
    }
    
})




export default NewPetScreen