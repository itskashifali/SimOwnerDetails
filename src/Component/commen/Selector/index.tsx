import {Image, Pressable, Text, View} from 'react-native';

import styles from './style';
import {IMAGES} from '../../../assets';
import {SelectorProps} from '../../../data/Types';
import {COLOR} from '../../../themes/StyleGuides';

const Selector = (props: SelectorProps) => {
  const {selector, onPress} = props;
  return (
    <View style={styles.TabBarContainer}>
      <Pressable
        onPress={() => onPress(0)}
        style={{
          ...styles.pressAbleBtn,
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor:
            selector == 0 ? COLOR.Primaray_light1 : COLOR.primary,
        }}>
        <Image
          source={IMAGES.call}
          style={{
            ...styles.TabBarIcon,
            tintColor: selector == 0 ? COLOR.primary : COLOR.white,
          }}
        />
      </Pressable>

      <Pressable
        onPress={() => onPress(1)}
        style={{
          ...styles.pressAbleBtn,
          backgroundColor:
            selector == 1 ? COLOR.Primaray_light1 : COLOR.primary,
        }}>
        <Image
          source={IMAGES.chat_box}
          style={{
            ...styles.TabBarIcon,
            tintColor: selector == 1 ? COLOR.primary : COLOR.white,
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => onPress(2)}
        style={{
          ...styles.pressAbleBtn,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor:
            selector == 2 ? COLOR.Primaray_light1 : COLOR.primary,
        }}>
        <Image
          source={IMAGES.internet}
          style={{
            ...styles.TabBarIcon,
            tintColor: selector == 2 ? COLOR.primary : COLOR.white,
          }}
        />
      </Pressable>
    </View>
  );
};
export default Selector;
