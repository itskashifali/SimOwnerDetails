import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    ...commonStyles.center,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: FONT.Poppins_Medium,
  },
  content: {
    fontSize: 12,
    marginBottom: '2%',
    fontFamily: FONT.Poppins_Regular,
  },
  buttonContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '10%',
  },
  btnText: {
    fontSize: 13,
    fontFamily: FONT.Poppins_SemiBold,
    color: COLOR.primary,
  },
  btn: {
    marginRight: '5%',
    paddingHorizontal: '6%',
    paddingVertical: '1.5%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.primary,
  },
});
