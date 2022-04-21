import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';



function  Alimentos ({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ALimentos</Text>
      <Button title='ir a Shop' onPress={ () =>{navigation.navigate ('Shops')}}/>
    </View>
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


export default Alimentos