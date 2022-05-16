import React from "react";
import { StyleSheet,View,Text,FlatList,TouchableOpacity}  from "react-native";
import CartItem from "../../components/CartItem";
import {useSelector,useDispatch} from 'react-redux';
import { confirmCart, removeItem } from "../../store/action/cart.action";



function CartScreen (){

    const items = useSelector (state => state.cart.items);
    const total = useSelector (state => state.cart.total);
    const dispatch = useDispatch ();


    const handlerConfirmCart = () => {
        if (items.lenght > 0)
        dispatch (confirmCart (items,total));
        else 
        console.log ("no hay productos en la lista");
    }

    const  handlerDeleteItem = id => dispatch(removeItem(id));

    const renderItem = ({item}) => (
        <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item.id)}/>
    )
 
    return (
    
    <View style={styles.container}>

        <View>
            <FlatList 
            data={items}
            renderItem={renderItem}
            keyExtractor= {item => item.id}
            />
                
        </View>
        <View> 
           <TouchableOpacity style = {styles.confirm} onPress={handlerConfirmCart}>
             <Text>Confirmar Compra</Text>  
             <View>
                 <Text>total</Text>
                 <Text>{total}</Text>
             </View>
           </TouchableOpacity>
           
        </View>
    </View>
        )
        

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding: 12,
        backgroundColor: '#fff',
      
    },
    confirm:{

    }

 
  
});



export default CartScreen