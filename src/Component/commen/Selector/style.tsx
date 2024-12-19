import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
    TabBarContainer: {
        width: '90%',
        height: 56,
        backgroundColor: COLOR.primary,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: '5%',
        ...commonStyles.verticleView,
        paddingHorizontal: '1%',
        elevation:10
      },
      TabBarIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: COLOR.white,
        alignSelf: 'center',
      },
      pressAbleBtn: {
        backgroundColor: COLOR.Primaray_light1,
        width: 104,
        height: 48,
        ...commonStyles.center,
      },
});

export default styles;
