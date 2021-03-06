import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'

import ShopNavigator from "../shop/ShopNavigator";
import CartNavigator from "../cart";
import OrderNavigator from "../order";
import PetListNavigator from "../PetList";

const BottomTabs = createBottomTabNavigator ();

const TabNavigator = () => (
    
    <BottomTabs.Navigator initialRouteName="ShopNavigator"
    screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar
    }}
    >
     <BottomTabs.Screen
     name="Shop"
     component={ShopNavigator}
     options={{
         tabBarIcon:({focused})=>(
             <View style={styles.item}>
                 <Ionicons name="md-home" size={30} color="black" />
                 <Text>Tienda</Text>
             </View>
         )
     }}

     />
     <BottomTabs.Screen
     name="CartTab"
     component={CartNavigator}
     options={{
        tabBarIcon:({focused})=>(
            <View style={styles.item}>
                <Ionicons name="md-cart" size={30} color="black" />
                <Text>Carrito</Text>
            </View>
        )
    }}

     />

<BottomTabs.Screen
     name="OrderTab"
     component={OrderNavigator}
     options={{
        tabBarIcon:({focused})=>(
            <View style={styles.item}>
                <Ionicons name="md-list" size={30} color="black" />
                <Text>Ordenes</Text>
            </View>
        )
    }}

     />



<BottomTabs.Screen
     name="PetList"
     component={PetListNavigator}
     options={{
        tabBarIcon:({focused})=>(
            <View style={styles.item}>
                <Ionicons name="md-list" size={30} color="black" />
                <Text>Mascotas</Text>
            </View>
        )
    }}

     />



    </BottomTabs.Navigator>
        


    )

    const styles = StyleSheet.create ({
        tabBar:{
            shadowColor:'#ccc',
            shadowOffset:{width:0,height:10},
            shadowOpacity: 0.25,
            shadowRadius:0.25,
            elevation:5,
            position:'absolute',
            bottom:25,
            left: 20,
            right:20,
            borderRadius:15,
            height:50,
            backgroundColor:'#FFC300',
            

        },
        item: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',

        },


    })

export default TabNavigator




    