import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableNativeFeedback, FlatList, Alert } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { getExpenses, deleteExpense } from './Expenses.data';
import styles from './ExpensesScreen.styles';

class ExpensesScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.state = { expenses: [], refreshing: true };
  }

  componentDidMount() {
    getExpenses().then(expenses => this.setState({ expenses, refreshing: false }));
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

  onExpenseDelete(expenseId) {
    deleteExpense(expenseId)
      .then(() => {
        const newExpenses = this.state.expenses.filter(exp => exp.id !== expenseId);
        this.setState({ expenses: newExpenses });
      })
      .catch(() => alert('Delete expense failed.'));
  }

  handleOnRefresh() {
    getExpenses().then(expenses => {
      this.setState({ expenses });
    });
  }

  handleOnExpenseItemLongPress(expense) {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete expense of ${expense.amount} HRK? \n Spent on: ${expense.description}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onExpenseDelete(expense.id) }
      ]
    );
  }

  renderExpenseItem(expense) {
    const expenseCategory = this.props.categories.find(category => category.id === expense.expense_category_id);

    return (
      <TouchableNativeFeedback onLongPress={this.handleOnExpenseItemLongPress.bind(this, expense)}>
        <View style={styles.expenseItem}>
          <View style={styles.expenseInfo}>
            <Text style={styles.expenseAmount}>
              {expense.amount} <Text style={styles.expenseCurrency}>HRK</Text>
            </Text>
            <Text style={styles.expenseDate}>{moment(expense.date).format('DD MMM YYYY')}</Text>
          </View>
          <View style={styles.expenseCategory}>
            <Text>{expenseCategory.name}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
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

const mapStateToProps = ({ categories }) => ({ categories });

ExpensesScreen = connect(mapStateToProps)(ExpensesScreen);

export default ExpensesScreen;
