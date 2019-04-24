import React, { Component } from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

import { expenses } from './Expenses.data';
import styles from './ExpensesScreen.styles';

class ExpensesScreen extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: 'Expenses',
      drawerLabel: 'Expenses',
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

  renderExpenseItem(item) {
    return (
      <View style={styles.expenseItem}>
        <View style={styles.expenseInfo}>
          <Text style={styles.expenseAmount}>
            {item.amount} <Text style={styles.expenseCurrency}>HRK</Text>
          </Text>
          <Text style={styles.expenseDate}>{moment(item.date).format('DD MMM YYYY')}</Text>
        </View>
        <View style={styles.expenseCategory}>
          <Text>{item.expense_category_id}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={expenses}
          renderItem={({ item }) => this.renderExpenseItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableHighlight style={styles.fab} onPress={() => this.props.navigation.openDrawer()}>
          <Ionicons name="ios-add" size={32} color="#fff" />
        </TouchableHighlight>
      </View>
    );
  }
}

export default ExpensesScreen;
