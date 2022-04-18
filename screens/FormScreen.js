import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, View } from 'react-native';



function   FormScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Completa el formulario</Text>
      <Button title='ir a Alimentos' onPress={ () => { navigation.native ('Alimentos')}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38B06',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  text:{
      fontFamily:'Courgette'
  }
});


export default FormScreen 