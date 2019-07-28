import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          size="large"
          rounded
          source={ require('../assets/images/user_without_photo.jpg') }
          showEditButton
        />
        <Text>Crear Cuenta</Text>
        <TextInput style={styles.input} placeholder="Nombre"/>
        <TextInput style={styles.input} placeholder="Ciudad"/>
        <TextInput style={styles.input} placeholder="Telefono"/>
        <TextInput style={styles.input} placeholder="Correo"/>
        <TextInput style={styles.input} placeholder="Contraseña"/>
        <Button title='Registrar' onPress={() => this.props.navigation.navigate('DashboardHome')} /> 
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
