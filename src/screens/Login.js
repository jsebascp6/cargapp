import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciar Sesion</Text>
        <TextInput style={styles.input} placeholder="Usuario"/>
        <TextInput style={styles.input} placeholder="Contraseña"/>
        <Button title='Iniciar sesión' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    input: {
      borderColor: 'black',
      borderWidth: 1
    }
});
