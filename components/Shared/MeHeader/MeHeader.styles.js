import { StyleSheet } from 'react-native';
import { circularBlack, myExpensesPurple } from '../../../assets/shared-styles/general';

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    backgroundColor: myExpensesPurple
  },
  headerMenu: {
    position: 'absolute',
    left: 18
  },
  headerText: {
    color: '#fff',
    fontFamily: circularBlack,
    fontSize: 18
  }
});

export default styles;
