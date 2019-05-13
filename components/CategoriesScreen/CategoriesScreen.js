import React, { Component } from 'react';
import { Alert, FlatList, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { setCategories, removeCategory } from '../../actions/categories.actions';
import { getCategories, deleteCategory } from '../CategoriesScreen/Categories.data';
import { Ionicons } from '@expo/vector-icons';
import styles from './CategoriesScreen.styles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.state = { refreshing: false };
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

  onCategoryDelete(categoryId) {
    deleteCategory(categoryId)
      .then(() => this.props.removeCategory(categoryId))
      .catch(err => {
        console.log(err);
        alert('Delete category failed.');
      });
  }

  handleOnRefresh() {
    getCategories().then(res => this.props.setCategories(res));
  }

  handleOnExpenseItemLongPress(category) {
    Alert.alert('Delete', `Are you sure you want to delete "${category.name}" category?`, [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', onPress: () => this.onCategoryDelete(category.id) }
    ]);
  }

  renderCategoryItem(category) {
    return (
      <TouchableNativeFeedback onLongPress={this.handleOnExpenseItemLongPress.bind(this, category)}>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    const { categories } = this.props;

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

const mapStateToProps = ({ categories }) => ({ categories });

CategoriesScreen = connect(
  mapStateToProps,
  { setCategories, removeCategory }
)(CategoriesScreen);

export default CategoriesScreen;
