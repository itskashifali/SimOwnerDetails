import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 80,
    backgroundColor: COLOR.Primaray_light1,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: COLOR.primarya_Light,
    borderWidth: 1,
    elevation: 13,
    marginTop: '5%',
    ...commonStyles.verticleView,
    overflow: 'hidden',
  },
  icons: {width: 30, height: 30, resizeMode: 'contain', tintColor: COLOR.black},
  title: {fontSize: 18, fontFamily: FONT.Poppins_SemiBold, color: COLOR.black},
  discription: {
    fontSize: 12,
    fontFamily: FONT.Poppins_Medium,
    color: COLOR.darkGray,
  },
  checkNew: {
    width: 40,
    backgroundColor: COLOR.primary,
    height: 80,
    ...commonStyles.center,
    paddingHorizontal: '2%',
  },
  nextICon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  CheckNoewText: {
    fontSize: 15,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.white,
  },
});

export default styles;
