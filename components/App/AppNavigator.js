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
      <View>
        <Text
          onPress={() => {
            SecureStore.getItemAsync('userToken').then(res => {
              Alert.alert(
                'Wut?',
                `Are you sure you want to delete ${res}?`,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      SecureStore.deleteItemAsync('userToken').then(() => props.navigation.navigate('Auth'));
                    }
                  }
                ],
                { cancelable: false }
              );
            });
          }}
        >
          LOG OUT
        </Text>
      </View>
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
