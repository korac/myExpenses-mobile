import { StyleSheet } from 'react-native';
import { myExpensesPurple } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    color: myExpensesPurple
  }
});

export default styles;
