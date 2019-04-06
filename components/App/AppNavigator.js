import React from 'react';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { ScrollView } from 'react-native';

import HomeScreen from '../HomeScreen';
import ExpensesScreen from '../ExpensesScreen';
import CategoriesScreen from '../CategoriesScreen';
import { myExpensesPurple } from '../../assets/shared-styles/general';
import { circularBlack } from '../../assets/shared-styles/general';
import styles from './App.styles';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: myExpensesPurple
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: circularBlack
    }
  }
};

const HomeNavigator = createStackNavigator({ Home: HomeScreen }, { ...navigatorOptions });

const ExpensesNavigator = createStackNavigator({ Expenses: ExpensesScreen }, { ...navigatorOptions });

const CategoriesNavigator = createStackNavigator({ Categories: CategoriesScreen }, { ...navigatorOptions });

const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.drawerScrollView}>
    <SafeAreaView style={styles.drawerContainer} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems
        {...props}
        activeTintColor="#fff"
        activeBackgroundColor={myExpensesPurple}
        inactiveTintColor="rgba(255, 255, 255, 0.5)"
        inactiveBackgroundColor="transparent"
        style={{ backgroundColor: '#000' }}
        labelStyle={{ fontSize: 18, textTransform: 'uppercase', fontFamily: circularBlack }}
      />
    </SafeAreaView>
  </ScrollView>
);

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
    Expenses: ExpensesNavigator,
    Categories: CategoriesNavigator
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);

export default AppNavigator;
