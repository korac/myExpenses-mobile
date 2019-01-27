import React, { Component } from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment';

import styles from './ExpensesScreen.styles';

import { expenses } from './Expenses.data';

class ExpensesScreen extends Component {
  renderExpenseItem(item) {
    return (
      <View style={styles.expenseItem}>
        <View style={styles.expenseInfo}>
          <Text style={styles.expenseAmount}>{item.amount}</Text>
          <Text style={styles.expenseDate}>{moment(item.date).format('DD MMM YYYY')}</Text>
        </View>
        <View style={styles.expenseCategory}>
          <Text>{item.expense_category_id}</Text>
        </View>
      </View>
    );
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={styles.appContainer}>
        <FlatList
          data={expenses}
          renderItem={({ item }) => this.renderExpenseItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableHighlight style={styles.button} onPress={() => alert('Create expense')}>
          <Text style={{ color: '#fff' }}>A</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ExpensesScreen;
