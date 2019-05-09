import React, { Component } from 'react';
import { FlatList, Text, TouchableHighlight, View } from 'react-native';

import { getCategories } from '../CategoriesScreen/Categories.data';
import { Ionicons } from '@expo/vector-icons';
import styles from './CategoriesScreen.styles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.state = { categories: [], refreshing: true };
  }

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories, refreshing: false }));
  }

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

  handleOnRefresh() {
    getCategories().then(categories => {
      this.setState({ categories });
    });
  }

  renderCategoryItem(item) {
    return (
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    );
  }

  render() {
    const { categories } = this.state;

    return (
      <View style={styles.appContainer}>
        <FlatList
          data={categories.sort((a, b) => a.name > b.name)}
          renderItem={({ item }) => this.renderCategoryItem(item)}
          keyExtractor={item => item.id.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleOnRefresh}
        />
        <TouchableHighlight style={styles.fab} onPress={() => this.props.navigation.navigate('NewCategory')}>
          <Ionicons name="ios-add" size={32} color="#fff" />
        </TouchableHighlight>
      </View>
    );
  }
}

export default CategoriesScreen;
