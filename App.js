import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import { createAppContainer } from "react-navigation";
import firebase from 'firebase';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componontWillMount() {
    var config = {
       apiKey: "AIzaSyDLj6vduyE56d8QjrRQn5AghJ35_eNY2fM",
       authDomain: "prueba-64896.firebaseapp.com",
       databaseURL: "https://prueba-64896.firebaseio.com",
       projectId: "prueba-64896",
       storageBucket: "",
       messagingSenderId: "51083850825",
       appId: "1:51083850825:web:605517614632308e"
     }; 
   firebase.initializeApp(config);

   firebase.database().ref('users/001').set(
     {
         name: 'Pheng Sengvuthy',
         age: 21
     }
   ).then(() => {
       console.log('INSERTED !');
   }).catch((error) => {
       console.log(error);
   });
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
