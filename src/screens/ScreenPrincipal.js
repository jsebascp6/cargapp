import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default class ScreenPrincipal extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../assets/images/cargapp.png')} style={styles.image} />
        <Text style={styles.textDescription} >Cargapp es una aplicación que conecta a conductores de vehículos de carga con empresas que requieren transportar sus productos de todo tipo.</Text>
        <Button title='Iniciar Sesión' onPress={() => this.props.navigation.navigate('Login')} /> 
        <Text style={styles.question}>¿Aun no eres usuario?</Text>
        <Button title='Registrate' onPress={() => this.props.navigation.navigate('Register')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 70,
        padding: 50,
        alignItems: "center",
        height: '100%',
        width: "100%",
    },

    image: {
      marginBottom: 30,
    },

    textDescription: {
      textAlign: "center",
      height: '50%',
    },

    question: {
      marginBottom: 5,
      marginTop: 30,
    }
});
