import { StyleSheet } from 'react-native';
import { myExpensesPurple } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
  drawerScrollView: {
    backgroundColor: myExpensesPurple
  },
  drawerContainer: {
    flex: 1
  }
});

export default styles;
