import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import ShopNavigator from "../shop/ShopNavigator";
import CartNavigator from "../cart";

const BottomTabs = createBottomTabNavigator ();

const TabNavigator = () => (
    
    <BottomTabs.Navigator initialRouteName="ShopNavigator">
     <BottomTabs.Screen
     name="Shop"
     component={ShopNavigator}
     />
     <BottomTabs.Screen
     name="CartTab"
     component={CartNavigator}
     />

    </BottomTabs.Navigator>
        


    )

export default TabNavigator




    