import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: COLOR.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    elevation: 10,
  },
  DrawerStyle: {width: 23, height: 23, resizeMode: 'contain'},
  title: {fontSize: 20, fontFamily: FONT.Poppins_SemiBold, color: COLOR.white2},
  btn: {
    ...commonStyles.center,
    borderWidth: 1,
    borderColor: COLOR.white,
    padding: '2%',
    borderRadius: 10,
  },
});

export default styles;
