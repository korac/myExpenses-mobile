import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SecureStore } from 'expo';
import { connect } from 'react-redux';

import { getCategories } from '../CategoriesScreen/Categories.data';
import { setCategories } from '../../actions/categories.actions';
import styles from './AuthLoadingScreen.styles';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SecureStore.getItemAsync('userToken').then(token => {
      if (token) {
        getCategories()
          .then(res => {
            this.props.setCategories(res);
            this.props.navigation.navigate('App');
          })
          .catch(() => {
            this.props.navigation.navigate('Auth');
          });
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
}

AuthLoadingScreen = connect(
  null,
  { setCategories }
)(AuthLoadingScreen);

export default AuthLoadingScreen;
