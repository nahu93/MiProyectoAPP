import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from "../constants/colors";

const formatDay = (time) => {
    const date = new Date (time)
    return date.toLocaleDateString()
}
const sumaTotal = (list) => list.map (item => item.quantity*item.precio).reduce((a,b) => a+b,0)

const ItemOrders = ({item, onDelete}) => {

    return (
        <View style={styles.item}>
            <View style={styles.detail}>
            <View>
                <Text>{formatDay(item.date)}</Text>
                 <Text style={styles.header}>${sumaTotal(item.items)}</Text>
            </View>
            
            
               <TouchableOpacity onPress={()=> onDelete (item.id)}>
                <Ionicons name="trash" size={24} color={COLORS.accent}></Ionicons>

               </TouchableOpacity>
            
           
            </View>
        </View>
    )


}


const styles = StyleSheet.create ({
    item:{
        flex:1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'

    },
    header:{
        fontSize:16,
        fontFamily:'Courgette'
    },
    detail:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'space-between'
        
    },
   
})

export default ItemOrders