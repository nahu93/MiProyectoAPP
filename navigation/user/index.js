/*import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../../screens/AuthScreen";
import { COLORS } from "../../constants/colors";


const Stack = createNativeStackNavigator ();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Order" 
        screenOptions={{
            headerStyle: {backgroundColor: Platform.OS === 'android' ? COLORS.encabezado: '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.encabezado,
            headerTitleStyle :{
                fontWeith: 'bold',
                color: 'black',
            }
        }}>
    
        <Stack.Screen
        name="Auth"
        component={AuthScreen}
        />
    
        </Stack.Navigator>
    )
}

export default AuthNavigator*/