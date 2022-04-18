import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FormScreen from "../screens/FormScreen";
import Alimentos from "../screens/Alimentos";
import Shops from "../screens/Shops";

const Stack = createNativeStackNavigator ();


const ShopNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={FormScreen}/>
                <Stack.Screen name="Alimentos" component={Alimentos}/>
                <Stack.Screen name="Shops"  component={Shops}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;