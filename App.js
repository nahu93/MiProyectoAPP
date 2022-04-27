import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation/MainNavigator';
import {Provider} from 'react-redux'
import store from './store'



export default function App() {
        const [loaded] = useFonts ({
          Courgette: require ('./assets/fonts/Courgette-Regular.ttf')
        })

        if (!loaded) return <AppLoading/>


  return (

    <Provider store={store}>

    <MainNavigator/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
