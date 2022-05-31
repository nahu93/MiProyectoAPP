import React from 'react';
import {Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {COLORS} from '../../constants/colors'
;
import PetListScreen from '../../screens/PetListScreen';

const Stack = createNativeStackNavigator ();

const PetListNavigator = () => (

    <Stack.Navigator initialRouteName="Lista" 
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
    name="PeTLista"
    component={PetListScreen}
    options= {{title: "Lista"}}/>

    </Stack.Navigator>
)


export default PetListNavigator;