import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator'
import AuthNavigator from "./user";
import { useSelector } from "react-redux";

const MainNavigator = () => {

   // const user = useSelector (state => state.auth.user);

    //const token = useSelector (state =>state.auth.token)


    return (

        
    <NavigationContainer>
    

        <TabNavigator/>
         

    
    </NavigationContainer>
    
    );  
      


};

export default MainNavigator

