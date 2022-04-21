import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';



function Shops ({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SHOP</Text>
      <Button title='ir a Alimentos' onPress={ () =>{navigation.navigate ('Alimentos')}}/>
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

export default Shops