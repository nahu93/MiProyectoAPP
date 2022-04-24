import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import AlimentoDetail from "../screens/Detalle";
import FormScreen from "../screens/FormScreen";
import Alimentos from "../screens/Alimentos";
import Productos from "../screens/Productos";
import { COLORS } from "../constants/colors";


const Stack = createNativeStackNavigator ();


const ShopNavigator = () => {

    return (
        <NavigationContainer>
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
                <Stack.Screen name="Alimentos" component={Alimentos}/>
                <Stack.Screen name="Productos"  component={Productos} 
                options={({route}) =>({title: route.params.name})}/>
                 <Stack.Screen name="Detail"  component={AlimentoDetail} 
                options={({route}) =>({title: route.params.alimento.name})}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;