import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './ExpensesScreen.styles';

class ExpensesScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Text>Expenses {this.props.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
          <Text style={{ color: '#fff' }}>A</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ExpensesScreen;
