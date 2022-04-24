import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

const GridItem = ({item, onSelected}) => {

    return (
        <View Style={styles.gridItem} >
            <TouchableOpacity 
            style={{ ...styles.container, backgroundColor: item.color}}  onPress={() => onSelected(item)}>

                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

            </TouchableOpacity>

        </View>
    );


}

const styles = StyleSheet.create ({
    gridItem:{
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container:{
        flex: 1,
        borderRadius: 6,
        shadowOpacity: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{width:0 , height: 5},
        shadowRadius: 6,
        elevation: 3,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        height:100,
        width:300,
        alignContent:'center',
        marginLeft:50,
        marginTop:10,
    },
    title:{
        fontFamily:'Courgette'
    }
})

export default GridItem