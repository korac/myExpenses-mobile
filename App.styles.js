import { StyleSheet } from 'react-native';

import { myExpensesPurple } from './assets/shared-styles/general';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: myExpensesPurple
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});

export default styles;
