import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.primary,
    height: 110,
    alignSelf: 'center',
    marginBottom: '5%',
    elevation: 10,
    backgroundColor: COLOR.Primaray_light1,
    overflow: 'hidden',
  },
  name: {fontSize: 14, fontFamily: FONT.Poppins_Bold, color: COLOR.black},
  DropBtn: {
    width: '100%',
    height: 40,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    position: 'absolute',
    bottom: 0,
    paddingVertical: '3%',
  },
  DropIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  detailsText: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.white,
  },
  titleCOntainer: {
    marginTop: '3%',
  },
  price: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Bold,
    color: COLOR.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
