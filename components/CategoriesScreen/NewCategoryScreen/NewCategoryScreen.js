import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { createCategory } from '../Categories.data';
import styles, { buttonClass } from './NewCategoryScreen.styles';

class NewCategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnAddPress = this.handleOnAddPress.bind(this);
    this.state = { categoryName: '' };
  }

  static navigationOptions({ navigation }) {
    return {
      title: 'New Category'
    };
  }

  handleOnAddPress() {
    const { categoryName } = this.state;

    const requestData = { name: categoryName };

    this.setState({ submitting: true });
    createCategory(requestData)
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        this.setState({ submitting: false });
      });
  }

  render() {
    const { categoryName, submitting } = this.state;

    const disabled = !categoryName.length;

    return (
      <View style={styles.newCategoryContainer}>
        <View style={styles.fieldWrapper}>
          <Text style={styles.fieldName}>CATEGORY NAME</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={categoryName => this.setState({ categoryName })}
            value={categoryName}
            placeholder="Add category name"
          />
        </View>
        <View style={styles.largeVerticalSeparator} />
        <TouchableOpacity
          style={buttonClass(disabled || submitting)}
          activeOpacity={1}
          disabled={disabled || submitting}
          onPress={this.handleOnAddPress}
        >
          <Text style={styles.buttonText}>{submitting ? 'ADDING...' : 'ADD NEW CATEGORY'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewCategoryScreen;
