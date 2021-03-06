import { StyleSheet } from 'react-native';

import { bold, myExpensesPurple } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  registerContainer: {
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
  newMember: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'right',
    textDecorationLine: 'underline'
  },
  largeVerticalSeparator: {
    flex: 1
  },
  registerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  registerButtonText: {
    color: myExpensesPurple,
    fontSize: 14
  }
});

export const buttonClass = disabled => {
  return disabled
    ? { ...styles.registerWrapper, backgroundColor: 'rgba(255, 255, 255, 0.2)' }
    : {
        ...styles.registerWrapper,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      };
};

export default styles;
