import { StyleSheet } from 'react-native';
import { myExpensesPurple, circularMedium, black1, black3 } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  // headerStyle: {
  //   backgroundColor: myExpensesPurple
  // },
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
  expenseDate: {
    color: black3,
    fontSize: 16
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    bottom: 26,
    right: 26,
    backgroundColor: myExpensesPurple
  }
});

export default styles;
