import React from "react";
import { TouchableOpacity,View,Text,Image,StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";


const PetItem = ({title, image, onSelect}) => {

return (
    <TouchableOpacity onPress={onSelect}
    style={styles.petItem}
    >
        <Image style={styles.image} source={{isStatic:true, uri:image,}}/>
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
        </View>
        

    </TouchableOpacity>
)


}

const styles = StyleSheet.create ({
    petItem:{
        borderBottomColor:'#ccc',
        borderBottomWidth: 1,
        paddingVertical:16,
        paddingHorizontal:30,
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor: COLORS.accent
    },
    info:{
        marginLeft:25,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    title:{
        color:COLORS.accent,
        fontSize:18,
        marginBottom:6,
    }
})

export default PetItem;