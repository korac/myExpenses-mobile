import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ExpensesScreen from './components/ExpensesScreen/ExpensesScreen';
import styles from './App.styles';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MyExpenses</Text>
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Expenses: { screen: ExpensesScreen }
// });
//
// const App = createAppContainer(AppNavigator);

export default App;
