import { StyleSheet } from 'react-native';
import { black2, bold, myExpensesPurple } from '../../../assets/shared-styles/general';

const styles = StyleSheet.create({
  newCategoryContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#f9fbfc'
  },
  fieldName: {
    marginBottom: 8,
    color: black2,
    fontSize: 16,
    fontWeight: bold
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: black2,
    paddingBottom: 8,
    color: black2,
    fontSize: 20,
    textDecorationLine: 'none'
  },
  largeVerticalSeparator: {
    flex: 1
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 4,
    backgroundColor: myExpensesPurple
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
});

export const buttonClass = disabled => {
  return disabled
    ? { ...styles.buttonWrapper, backgroundColor: 'rgba(99, 49, 71, 0.65)' }
    : {
        ...styles.buttonWrapper,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      };
};

export default styles;
