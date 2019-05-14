import React, { Component } from 'react';
import { Text, TextInput, View, Picker, TouchableOpacity, DatePickerAndroid } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import { createExpense } from './NewExpense.data';
import styles, { buttonClass } from './NewExpenseScreen.styles';

class NewExpenseScreen extends Component {
  constructor(props) {
    super(props);

    this.handleOnAddPress = this.handleOnAddPress.bind(this);
    this.onDatePickerPress = this.onDatePickerPress.bind(this);
    this.state = {
      expenseAmount: '',
      expenseCategory: '',
      expenseDescription: '',
      expenseDate: moment().toDate(),
      submitting: false
    };
  }

  componentDidMount() {
    this.setState({ expenseCategory: this.props.categories[0].id });
  }

  static navigationOptions({ navigation }) {
    return {
      title: 'New Expense'
    };
  }

  handleOnAddPress() {
    const { expenseAmount, expenseCategory, expenseDescription, expenseDate } = this.state;

    const requestData = {
      amount: expenseAmount,
      currency: 'HRK',
      date: expenseDate,
      description: expenseDescription,
      expense_category_id: expenseCategory
    };

    this.setState({ submitting: true });
    createExpense(requestData)
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err);
        this.setState({ submitting: false });
      });
  }

  async onDatePickerPress() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: this.state.expenseDate
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          expenseDate: moment()
            .year(year)
            .month(month)
            .date(day)
            .toDate()
        });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    const { categories } = this.props;
    const { expenseAmount, expenseCategory, expenseDescription, expenseDate, submitting } = this.state;

    const disabled =
      !expenseAmount.toString().length || !expenseCategory.toString().length || !expenseDescription.length;

    return (
      <View style={styles.newExpenseContainer}>
        <View style={styles.fieldWrapper}>
          <Text style={styles.fieldName}>EXPENSE AMOUNT</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={expenseAmount => this.setState({ expenseAmount })}
            value={expenseAmount}
            placeholder="Add expense amount"
            keyboardType="decimal-pad"
          />
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.fieldWrapper}>
          <Text style={styles.fieldName}>EXPENSE CATEGORY</Text>
          <Picker
            style={styles.pickerInput}
            selectedValue={expenseCategory}
            onValueChange={expenseCategory => this.setState({ expenseCategory })}
          >
            {categories.map(category => (
              <Picker.Item color="#404040" label={category.name} value={category.id} key={category.id} />
            ))}
          </Picker>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.fieldWrapper}>
          <Text style={styles.fieldName}>EXPENSE DATE</Text>
          <Text style={styles.fieldDatepicker} onPress={this.onDatePickerPress}>
            {moment(expenseDate).format('MMM D, YYYY')}
          </Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.fieldWrapper}>
          <Text style={styles.fieldName}>EXPENSE DESCRIPTION</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={expenseDescription => this.setState({ expenseDescription })}
            value={expenseDescription}
            multiline={true}
            scrollEnabled
            maxHeight={100}
          />
        </View>
        <View style={styles.largeVerticalSeparator} />
        <TouchableOpacity
          style={buttonClass(disabled || submitting)}
          activeOpacity={1}
          disabled={disabled || submitting}
          onPress={this.handleOnAddPress}
        >
          <Text style={styles.buttonText}>{submitting ? 'ADDING...' : 'ADD NEW EXPENSE'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

NewExpenseScreen = connect(mapStateToProps)(NewExpenseScreen);

export default NewExpenseScreen;
