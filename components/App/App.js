import Expo, { Font } from 'expo';
import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import ExpensesScreen from '../ExpensesScreen';
import styles from './App.styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { fontLoaded: false, header: 'EXPENSES' };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'circular-black': require('../../assets/fonts/Circular-Black.ttf'),
      'circular-black-italic': require('../../assets/fonts/Circular-BlackItalic.ttf'),
      'circular-bold': require('../../assets/fonts/Circular-Bold.ttf'),
      'circular-bold-italic': require('../../assets/fonts/Circular-BoldItalic.ttf'),
      'circular-book': require('../../assets/fonts/Circular-Book.ttf'),
      'circular-book-italic': require('../../assets/fonts/Circular-BookItalic.ttf'),
      'circular-medium': require('../../assets/fonts/Circular-Medium.ttf'),
      'circular-medium-italic': require('../../assets/fonts/Circular-MediumItalic.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    return fontLoaded ? (
      <View style={styles.appContainer}>
        <View style={[styles.appHeader, { height: 56 + StatusBar.currentHeight, paddingTop: StatusBar.currentHeight }]}>
          <Text style={styles.text}>{this.state.header}</Text>
        </View>
        <View style={styles.appMainContent} />
      </View>
    ) : null;
  }
}

// const AppNavigator = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Expenses: { screen: ExpensesScreen }
// });
//
// const App = createAppContainer(AppNavigator);

export default Expo.registerRootComponent(App);
