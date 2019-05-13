import { StyleSheet } from 'react-native';
import { myExpensesPurple, black3 } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
  expenseItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14
  },
  expenseAmount: {
    fontSize: 42
  },
  expenseCurrency: {
    fontSize: 14
  },
  expenseDate: {
    color: black3,
    fontSize: 16
  },
  expenseCategory: {
    justifyContent: 'flex-end'
  },
  fab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 18,
    right: 18,
    backgroundColor: myExpensesPurple,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
});

export default styles;
