import React, { Component } from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

import { getExpenses } from './Expenses.data';
import styles from './ExpensesScreen.styles';

class ExpensesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.state = { expenses: [], refreshing: false };
  }

  componentDidMount() {
    getExpenses().then(expenses => this.setState({ expenses }));
  }

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

  static sortExpenses(expenses) {
    return expenses.sort((prev, next) => (prev.date < next.date ? 1 : -1));
  }

  handleOnRefresh() {
    getExpenses().then(expenses => {
      this.setState({ expenses });
    });
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
    const sortedExpenses = ExpensesScreen.sortExpenses(this.state.expenses);

    return (
      <View style={styles.appContainer}>
        <FlatList
          data={sortedExpenses}
          renderItem={({ item }) => this.renderExpenseItem(item)}
          keyExtractor={item => item.id.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleOnRefresh}
        />
        <TouchableHighlight style={styles.fab} onPress={() => this.props.navigation.navigate('NewExpense')}>
          <Ionicons name="ios-add" size={32} color="#fff" />
        </TouchableHighlight>
      </View>
    );
  }
}

export default ExpensesScreen;
