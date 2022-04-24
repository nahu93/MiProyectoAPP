
import React from 'react';
import { StyleSheet, Button, Text, View, FlatList,} from 'react-native';
import {AlimentoBalanceado} from '../data/AlimentoBalanceado'
import AlimentosItem from '../components/AlimentosItem';


function Productos ({navigation, route}) {

const productosAlimentos = AlimentoBalanceado.filter (alimento => alimento.category === route.params.categoryID )

const handleSelect = (item) =>{
  navigation.navigate('Detail' ,{
    PruductID:item.id,
    alimento: item
  })
}

const renderItemAlimento = ({item}) => <AlimentosItem item={item} onSelected={handleSelect}/>

  return (

    <FlatList 
    data={productosAlimentos}
    keyExtractor={item => item.id}
    renderItem={renderItemAlimento}/>




    /*<View style={styles.container}>
      <Text style={styles.text}>Productos</Text>
      <Button title='ir a HOME' onPress={ () =>{navigation.navigate ('Home')}}/>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38B06',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text:{
      fontFamily:'Courgette'
  }
});

export default Productos