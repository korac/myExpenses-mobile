import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './HomeScreen.styles';

class HomeScreen extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: 'Home',
      drawerLabel: 'Home',
      headerLeft: (
        <Ionicons
          name="md-menu"
          size={30}
          color="#fff"
          style={{ paddingLeft: 18 }}
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Dashboard screen in development.</Text>
        <Text style={styles.homeText}>Check out for Expenses and Categories screens.</Text>
      </View>
    );
  }
}

export default HomeScreen;
