import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './MeHeader.styles';

class MeHeader extends Component {
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={[styles.appHeader, { height: 56 + StatusBar.currentHeight, paddingTop: StatusBar.currentHeight }]}>
        <Ionicons styles={styles.headerMenu} name="md-menu" size={32} color="#fff" />
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

export default MeHeader;
