import Expo, { Font } from 'expo';
import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MeHeader from '../Shared/MeHeader';
import HomeScreen from '../HomeScreen';
import ExpensesScreen from '../ExpensesScreen';
import styles from './App.styles';

const AppNavigator = createStackNavigator(
  {
    Expenses: {
      screen: ExpensesScreen,
      navigationOptions: ({ navigation }) => ({
        header: HeaderProps => <MeHeader {...HeaderProps} title="EXPENSES" />
      })
    }
  },
  {
    initialRouteName: 'Expenses'
  }
);

const AppContainer = createAppContainer(AppNavigator);

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

    return fontLoaded ? <AppContainer /> : null;
  }
}

export default Expo.registerRootComponent(App);
