
import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, FlatList,} from 'react-native';
//import {AlimentoBalanceado} from '../data/AlimentoBalanceado'
import AlimentosItem from '../components/AlimentosItem';
import {useSelector,useDispatch} from 'react-redux';
import {filteredAlimento,selectAlimento} from '../store/action/alimento.action';


function Productos ({navigation}) {

  const dispatch = useDispatch();
  const categoryAlimentos = useSelector(state => state.alimentos.filteredAlimento);
  const category = useSelector (state => state.categories.selected);

  
 //const productosAlimentos = AlimentoBalanceado.filter (alimento => alimento.category === route.params.categoryID )

 useEffect ( () =>{
   console.log ("screen:" + category.id);
   dispatch (filteredAlimento(category.id));
   


   },[])

 const handleSelect = (item) =>{
  
  dispatch (selectAlimento(item.id))
 
  navigation.navigate('Detail' ,{
   // PruductID:item.id,
    alimento: item
    
  })
}

 const renderItemAlimento = ({item}) => <AlimentosItem item={item} onSelected={handleSelect}/>

 console.log (categoryAlimentos)

  return (
    

    <FlatList 
    data={categoryAlimentos}
    keyExtractor={item => item.id}
    renderItem={renderItemAlimento}/>
    
    

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