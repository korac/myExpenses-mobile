import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

import styles from './MeHeader.styles';

class MeHeader extends Component {
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={[styles.appHeader, { height: 56 + StatusBar.currentHeight, paddingTop: StatusBar.currentHeight }]}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

export default MeHeader;
