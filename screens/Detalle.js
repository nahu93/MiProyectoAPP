import React from "react";
import {Text,StyleSheet,View,Button,TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { addItem } from "../store/action/cart.action";


function AlimentoDetail () {

const dispatch = useDispatch ();

const alimento = useSelector (state=>state.alimentos.selected) 

const handlerAddItemCart = () => dispatch (addItem (alimento))

return(

<View style={styles.container}>
    <Text  style={styles.title} > {alimento.name}</Text>
    <Text >{alimento.descripcion} </Text>
    <Text >precio: ${alimento.precio} </Text>
    <Text > cantidad : {alimento.cantidad} Kg </Text>
    <TouchableOpacity onPress={handlerAddItemCart}>
        <View style={StyleSheet.Button} >
            <Text style={styles.textButton}> Agregar al carrito</Text>
        </View>
    </TouchableOpacity>
</View>
)
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'

    },
    title:{
        fontSize:20,
        fontFamily: 'Courgette',
        marginBottom:10,
    }



})

export default AlimentoDetail