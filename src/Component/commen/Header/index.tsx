import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {HeadersProps} from '../../../data/Types';
import {IMAGES} from '../../../assets';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
const Header = (props: HeadersProps) => {
  const {firstOnpress, title, icons} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={firstOnpress}
        style={styles.btn}>
        <Image
          source={icons ? icons : IMAGES.Drawer}
          tintColor={COLOR.white2}
          style={styles.DrawerStyle}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.DrawerStyle} />
    </View>
  );
};
export default Header;
