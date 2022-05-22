import React from "react";
import { StyleSheet,View,Text,FlatList,TouchableOpacity}  from "react-native";
import CartItem from "../../components/CartItem";
import {useSelector,useDispatch} from 'react-redux';
import { confirmCart, removeItem } from "../../store/action/cart.action";
import {COLORS} from "../../constants/colors"


function CartScreen (){

    const items = useSelector (state => state.cart.items);
    const total = useSelector (state => state.cart.total);
    const dispatch = useDispatch ();


    const handlerConfirmCart = () => {
        if (items)
      
        dispatch (confirmCart (items,total)) ;
        
        else 
        console.log ("no hay productos en la lista");
    }

    const  handlerDeleteItem = id => dispatch(removeItem(id));

    const renderItem = ({item}) => (
        <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item.id)}/>
    )
    console.log(items)
 
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
                 <Text>TOTAL:</Text>
                 <Text>${total}</Text>
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
        backgroundColor: '#F38B06',
      
    },
    confirm:{
         
        
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



export default CartScreen