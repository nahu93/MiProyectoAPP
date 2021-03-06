import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getOrders,deleteOrder } from '../../store/action/order.action';
import ItemOrders from '../../components/ItemOrders';


const OrderScreen = ({navigation}) => {

    const orders = useSelector (state => state.order.items);
    console.log (orders)
    const dispatch = useDispatch ();
    const onHandlerDeleteItem = (id) => dispatch (deleteOrder(id))

    const renderItem = (itemData) => (
        <ItemOrders
        item = {itemData.item}
        onDelete={onHandlerDeleteItem}/>
        
    )

    useEffect (()=>{

        const unsubscribe = navigation.addListener ('focus', ()=>{
         dispatch (getOrders());   
        })

        return unsubscribe

        
    },[navigation]);


    return (
        <View style={styles.container}>
            <View>
                <FlatList
                data={orders}
                renderItem = {renderItem}
                keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding: 12,
        backgroundColor: '#F38B06',
      
    },
    

 
  
});

export default OrderScreen