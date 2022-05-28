
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from "../constants/colors";

function   FormScreen ({navigation}) {


  



 

  return (
    <View style={styles.container}>


    

           <TouchableOpacity style={styles.agregar} onPress={()=> {navigation.navigate ('Nuevo')}}>
             <Text  >NUEVA MASCOTA</Text>
                <Ionicons  name="md-add" size={15} color="black" ></Ionicons>
                
                

            </TouchableOpacity>
           
             
      <Button styles={styles.alimentos} title='Alimentos Balenceados' onPress={ () => { navigation.navigate ('Alimentos')}}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F38B06',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text:{
      fontFamily:'Courgette'
  },
  agregar:{
    
    borderRadius: 6,
    shadowOpacity: 'black',
    shadowOpacity: 0.26,
    shadowOffset:{width:0 , height: 1},
    shadowRadius: 6,
    elevation: 1,
    justifyContent:'center',
    padding:2,
    flexDirection:'row',
    width:300,
    height:40,
    alignContent:'center',
    alignItems:'center'
   
  },
  alimentos:{
    
      borderRadius: 6,
      shadowOpacity: 'black',
      shadowOpacity: 0.26,
      shadowOffset:{width:0 , height: 5},
      shadowRadius: 6,
      backgroundColor: COLORS.accent,
      justifyContent:'center',
      alignItems:'center',
      padding:5,
     
      
      alignContent:'center',
     
  },

});


export default FormScreen 