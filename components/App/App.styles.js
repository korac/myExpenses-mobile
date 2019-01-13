import { StyleSheet } from 'react-native';

import { circularBlack, myExpensesPurple } from '../../assets/shared-styles/general';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    backgroundColor: myExpensesPurple
  },
  text: {
    color: '#fff',
    fontFamily: circularBlack,
    fontSize: 18
  }
});

export default styles;
