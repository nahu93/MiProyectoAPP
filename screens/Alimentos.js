import React from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';

import {CATEGORIES} from '../data/categories'
import GridItem from '../components/GridItem';


function  Alimentos ({navigation}) {
  const handleSelectedCategory = (item)=>{
    navigation.navigate ('Productos',{
      categoryID: item.id,
      name:item.title
    });
  }

  const renderGridItem = ({item}) => <GridItem item= {item} onSelected= {handleSelectedCategory}/>



  return (

    <FlatList 
    data={CATEGORIES}
    keyExtractor= {item => item.id}
    renderItem ={renderGridItem}
    

    />

    

     /*<View style={styles.container}>
      <Text style={styles.text}>Alimentos</Text>
      <Button title='ir a Productos' onPress={ () =>{navigation.navigate ('Productos')}}/>
    </View>*/
  );
}

const styles = StyleSheet.create({
 
  
});


export default Alimentos