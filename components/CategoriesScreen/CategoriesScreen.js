import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableHighlight, View } from 'react-native';

import { getCategories } from '../CategoriesScreen/Categories.data';
import { Ionicons } from '@expo/vector-icons';
import { myExpensesPurple } from '../../assets/shared-styles/general';
import styles from './CategoriesScreen.styles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: [], loading: true };
  }

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories, loading: false }));
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

  renderCategoryItem(item) {
    return (
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    );
  }

  render() {
    const { categories, loading } = this.state;

    return (
      <View style={styles.appContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={myExpensesPurple} />
        ) : (
          <FlatList
            data={categories.sort((a, b) => a.name > b.name)}
            renderItem={({ item }) => this.renderCategoryItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <TouchableHighlight style={styles.fab} onPress={() => this.props.navigation.openDrawer()}>
          <Ionicons name="ios-add" size={32} color="#fff" />
        </TouchableHighlight>
      </View>
    );
  }
}

export default CategoriesScreen;
