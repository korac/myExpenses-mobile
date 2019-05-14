import React from 'react';
import { createStackNavigator, createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { ScrollView, View, Text, Alert } from 'react-native';
import { SecureStore } from 'expo';

import HomeScreen from '../HomeScreen';
import ExpensesScreen from '../ExpensesScreen';
import NewExpenseScreen from '../ExpensesScreen/NewExpenseScreen';
import CategoriesScreen from '../CategoriesScreen';
import NewCategoryScreen from '../CategoriesScreen/NewCategoryScreen/NewCategoryScreen';
import { myExpensesPurple } from '../../assets/shared-styles/general';
import { circularBlack } from '../../assets/shared-styles/general';
import styles from './App.styles';
import Drawer from './Drawer/Drawer';

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

const ExpensesNavigator = createStackNavigator(
  {
    Expenses: ExpensesScreen,
    NewExpense: NewExpenseScreen
  },
  { ...navigatorOptions }
);

const CategoriesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    NewCategory: NewCategoryScreen
  },
  { ...navigatorOptions }
);

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
    Expenses: ExpensesNavigator,
    Categories: CategoriesNavigator
  },
  {
    contentComponent: Drawer
  }
);

export default AppNavigator;
