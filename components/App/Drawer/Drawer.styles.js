import { StyleSheet } from 'react-native';

import { circularBlack, myExpensesPurple } from '../../../assets/shared-styles/general';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 0,
    paddingTop: 50,
    position: 'relative',
    backgroundColor: myExpensesPurple
  },
  navItemStyle: {
    padding: 16,
    color: '#fff',
    fontSize: 16,
    fontFamily: circularBlack
  },
  drawerFooter: {
    padding: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  drawerFooterText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: circularBlack
  }
});

export default styles;
