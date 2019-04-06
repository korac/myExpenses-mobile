import React, { Component } from 'react';
import { FlatList, Text, TouchableHighlight, View } from 'react-native';

import { categories } from '../CategoriesScreen/Categories.data';
import { Ionicons } from '@expo/vector-icons';
import styles from './CategoriesScreen.styles';

class CategoriesScreen extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: 'Categories',
      drawerLabel: 'Categories',
      headerLeft: (
        <Ionicons
          name="md-menu"
          size={30}
          color="#fff"
          style={{ paddingLeft: 18 }}
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  }

  renderCategoryItem(item) {
    return (
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => this.renderCategoryItem(item)}
          keyExtractor={item => item}
        />
        <TouchableHighlight style={styles.fab} onPress={() => this.props.navigation.openDrawer()}>
          <Ionicons name="ios-add" size={32} color="#fff" />
        </TouchableHighlight>
      </View>
    );
  }
}

export default CategoriesScreen;
