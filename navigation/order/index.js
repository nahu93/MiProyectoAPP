import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {COLORS} from '../../constants/colors'
import OrderScreen from '../../screens/cart/OrderScreen';

const Stack = createNativeStackNavigator ();

const OrderNavigator = () => (

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
    name="Order"
    component={OrderScreen}
    options= {{title: "Order"}}/>

    </Stack.Navigator>
)


export default OrderNavigator;