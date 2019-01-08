import { StyleSheet } from 'react-native';
import { myExpensesPurple } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
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
