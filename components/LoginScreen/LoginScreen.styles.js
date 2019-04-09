import { StyleSheet } from 'react-native';

import { bold, myExpensesPurple, semibold } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: myExpensesPurple,
    padding: 40
  },
  titleWrapper: {
    flex: 1,
    paddingTop: 40
  },
  screenTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: bold
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'none'
  },
  verticalSeparator: {
    height: 45
  },
  largeVerticalSeparator: {
    flex: 1
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  loginButtonText: {
    color: myExpensesPurple,
    fontSize: 14
  }
});

export const loginClass = disabled => {
  return disabled
    ? { ...styles.loginWrapper, backgroundColor: 'rgba(255, 255, 255, 0.2)' }
    : {
        ...styles.loginWrapper,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      };
};

export default styles;
