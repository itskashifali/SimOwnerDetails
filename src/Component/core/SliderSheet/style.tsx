import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  BackBaR: {
    height: 48,
    width: "100%",
    ...commonStyles.center,
    backgroundColor:COLOR.primary,
    marginBottom:'4%',
    borderColor:COLOR.white,
    borderBottomWidth:1,

  },
  name: {
    fontSize: 18,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
  },
  offer: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.darkGray,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: FONT.Poppins_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
  AnsTitle: {
    fontSize: 14,
    fontFamily: FONT.Poppins_Regular,
    color: COLOR.darkGray,
    marginLeft: '2%',
  },
  activationCode: {
    fontSize: 18,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.primary,

    textDecorationLine: 'underline',
  },
  ActivationText: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    position: 'absolute',
    bottom: '15%',
    width: '100%',
  },
  close: {width: 16, height: 12, resizeMode: 'contain',tintColor:COLOR.white},
});

export default styles;
