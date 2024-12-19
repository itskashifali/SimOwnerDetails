import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {BottonTabsProps} from '../../../data/Types';
import {commonStyles} from '../../../themes/StyleGuides';
import {IMAGES} from '../../../assets';

const BottonTab = (props: BottonTabsProps) => {
  const {onpress, title, images, discription} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}  >
      <View style={{...commonStyles.horizontalView, paddingHorizontal: '2%'}}>
        <Image source={images} style={styles.icons} />
        <View style={{marginLeft: '3%'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.discription}>{discription}</Text>
        </View>
      </View>
      <View style={styles.checkNew} >
        <Image source={IMAGES.right_arrow} style={styles.nextICon} />
      </View>
    </TouchableOpacity>
  );
};
export default BottonTab;
