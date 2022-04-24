import React from "react";
import  {View,Text,TouchableOpacity,StyleSheet} from 'react-native'




const AlimentosItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity style={{...styles.AlimentoItem, backgroundColor: '#900C3F'}} onPress={() => onSelected (item)}>
            <View>
              <View>
                <Text style = {styles.title}>{item.name}</Text>
              </View>
              <View>
                <Text style={styles.detail}>$ {item.precio}</Text>
                <Text style={styles.detail}>{item.cantidad}Kg</Text>
              </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    AlimentoItem:{
        padding:20,
        margin:10,
        borderRadius:3,
        alignItems:'center',
        alignContent:'center'
        
    },
    title:{
        fontSize: 40,
        fontFamily: 'Courgette'

    },
    detail:{
        fontSize:25,

    },

})

export default AlimentosItem