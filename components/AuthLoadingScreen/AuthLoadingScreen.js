import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SecureStore } from 'expo';

import styles from './AuthLoadingScreen.styles';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    // this._bootstrapAsync();
  }

  componentDidMount() {
    SecureStore.getItemAsync('userToken').then(res => {
      this.props.navigation.navigate(res ? 'App' : 'Auth');
    });
  }

  // _bootstrapAsync = async () => {
  //   const userToken = await SecureStore.getItemAsync('userToken');
  //
  //   console.log(userToken);
  //
  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  // };

  render() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
