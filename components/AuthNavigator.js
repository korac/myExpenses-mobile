import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import AppNavigator from './App/AppNavigator';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen }
  },
  { headerMode: 'none' }
);

const AuthContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default AuthContainer;
