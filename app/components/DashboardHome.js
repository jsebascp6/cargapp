import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';

export default class DashboardHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/cargapp.png')} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
    }
});
