import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppNavigator from './app/components/AppNavigator';
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
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
