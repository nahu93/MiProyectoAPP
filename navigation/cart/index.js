import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {COLORS} from '../../constants/colors'
import CartScreen from '../../screens/cart/CartScreen';

const Stack = createNativeStackNavigator ();

const CartNavigator = () => (

    <Stack.Navigator initialRouteName="Cart" 
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
    name="Cart"
    component={CartScreen}
    options= {{title: "Carrito"}}/>

    </Stack.Navigator>
)


export default CartNavigator;