import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { myExpensesPurple } from '../../assets/shared-styles/general';
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
