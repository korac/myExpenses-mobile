import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableNativeFeedback, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { SecureStore } from 'expo';

import styles from './Drawer.styles';

class Drawer extends Component {
  navigateToScreen(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <View style={styles.drawerContainer}>
        <ScrollView>
          <View style={styles.navSectionStyle}>
            <TouchableNativeFeedback onPress={this.navigateToScreen.bind(this, 'Home')}>
              <Text style={styles.navItemStyle}>HOME</Text>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.navSectionStyle}>
            <TouchableNativeFeedback onPress={this.navigateToScreen.bind(this, 'Expenses')}>
              <Text style={styles.navItemStyle}>EXPENSE</Text>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this.navigateToScreen.bind(this, 'Categories')}>
              <Text style={styles.navItemStyle}>CATEGORIES</Text>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
        <View style={styles.drawerFooter}>
          <Text
            style={styles.drawerFooterText}
            onPress={() => {
              Alert.alert(
                'Logout',
                'Are you sure you want to log out?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      SecureStore.deleteItemAsync('userToken').then(() => this.props.navigation.navigate('Auth'));
                    }
                  }
                ],
                { cancelable: false }
              );
            }}
          >
            LOG OUT
          </Text>
        </View>
      </View>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;
