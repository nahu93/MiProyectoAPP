import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import AlimentoDetail from "../../screens/Detalle";
import FormScreen from "../../screens/FormScreen";
import Alimentos from "../../screens/Alimentos";
import Productos from "../../screens/Productos";
import NewPetScreen from "../../screens/NewPetScreen";
import { COLORS } from "../../constants/colors";
import PetListScreen from "../../screens/petListScreen";



const Stack = createNativeStackNavigator ();


const ShopNavigator = () => {

    return (
        
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {backgroundColor: Platform.OS === 'android' ? COLORS.encabezado: '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.encabezado,
                headerTitleStyle :{
                    fontWeith: 'bold',
                    color: 'black',
                }
            }} >

                <Stack.Screen name="Home" component={FormScreen} options= {{title:"MY PET"}} />
                <Stack.Screen name="Nuevo" component={NewPetScreen} options={{title:"Nueva Mascota"}}/>
                <Stack.Screen name="Lista" component={PetListScreen} options={{title:"Lista"}}/>
                <Stack.Screen name="Alimentos" component={Alimentos}/>
                <Stack.Screen name="Productos"  component={Productos} 
                options={({route}) =>({title: route.params.name})}/>
                 <Stack.Screen name="Detail"  component={AlimentoDetail} 
                options={({route}) =>({title: route.params.alimento.name})}/>
            </Stack.Navigator>
        
    )
}

export default ShopNavigator;