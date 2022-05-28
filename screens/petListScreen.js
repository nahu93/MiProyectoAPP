import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import PetItem from '../components/PetItem';
import { FlatList,View,StyleSheet } from "react-native";




const PetListScreen= ({navigation}) =>{

   let pets = useSelector (state => state.pets);


   console.log (pets)

  const renderItem = (item) =>{
      <PetItem
      title={item.title}
      image={item.image}
      />

       
       }

      
 
      return (

        <View style={styles.lista}>
            <FlatList 
                data={pets}
               keyExtractor={item=>item.id}
                renderItem={renderItem}
                
                 />
           </View> 


 
      )
    
    } 


    const styles = StyleSheet.create ({
        lista:{
            height:200,
            
          },
    })

    export default  PetListScreen