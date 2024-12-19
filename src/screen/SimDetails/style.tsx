import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  SearchContainer: {
    width: '90%',
    height: 48,
    borderRadius: 10,
    ...commonStyles.verticleView,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
  },
  SearchMainContainer: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    marginTop: '7%',
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: COLOR.primary,
  },
  input: {
    color: COLOR.black,
    fontSize: 16,
    flex: 1,
    height: 48,
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLOR.Primaray_light1,
    borderRadius: 5,
  },
  resultText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLOR.white,
    width: '95%',
    alignSelf: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataText: {fontSize: 12, fontWeight: '500', color: COLOR.gray},
  Error: {
    fontSize: 16,
    color: COLOR.red,
    fontFamily: FONT.Poppins_SemiBold,
    width: '90%',
    marginTop: '10%',
    textAlign: 'center',
  },
  SearcText: {
    alignSelf: 'center',
    color: COLOR.white,
    fontSize: 16,
    fontFamily: FONT.Poppins_SemiBold,
  },
  searchBTn: {
    width: '100%',
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
    height: 48,
  },
});

export default styles;
