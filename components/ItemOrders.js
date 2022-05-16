import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from "../constants/colors";



const ItemOrders = ({item, onDelete}) => {

    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
            <View>
               <Text style={styles.text}>{item.precio}</Text>
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
    text:{
        fontSize:16,
        fontFamily:'Courgette'
    }
})

export default ItemOrders