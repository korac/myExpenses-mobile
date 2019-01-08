import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { myExpensesPurple } from '../../assets/shared-styles/general';
import styles from './HomeScreen.styles';

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          color={myExpensesPurple}
          title="Expenses"
          onPress={() => navigate('Expenses', { name: 'Jane Expense' })}
        />
      </View>
    );
  }
}

export default HomeScreen;
