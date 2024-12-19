import {StyleSheet} from 'react-native';
import {COLOR} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLOR.Primaray_light1,
    marginTop: '10%',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
    height:50
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  activeDrawerItem: {
    backgroundColor: COLOR.primary, 
    borderRadius: 5,
  },
});
