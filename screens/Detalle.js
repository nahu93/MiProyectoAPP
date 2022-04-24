import React from "react";
import {Text,StyleSheet,View,Button} from 'react-native';


function AlimentoDetail ({route}) {

const alimento = route.params.alimento;

return(

<View style={styles.container}>
    <Text  style={styles.title} > {alimento.name}</Text>
    <Text >{alimento.descripcion} </Text>
    <Text >precio: ${alimento.precio} </Text>
    <Text > cantidad : {alimento.cantidad} Kg </Text>
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