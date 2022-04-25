import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
        const [loaded] = useFonts ({
          Courgette: require ('./assets/fonts/Courgette-Regular.ttf')
        })

        if (!loaded) return <AppLoading/>


  return (
    <MainNavigator/>
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
