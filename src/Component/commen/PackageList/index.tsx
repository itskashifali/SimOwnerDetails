import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {PackageListProps} from '../../../data/Types';
import {IMAGES} from '../../../assets';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const PackageList = (props: PackageListProps) => {
  const {name, price, validity, offerDetails, activationCode, onpress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <View style={styles.titleCOntainer}>
        <View>
          <Text style={{...styles.name, marginLeft: '2%'}}>{name}</Text>
          <View style={{...commonStyles.verticleView, paddingHorizontal: '2%'}}>
            <Text style={styles.price}>{price}</Text>
            <Text style={{...styles.name, color: COLOR.darkGray}}>
              {validity}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.DropBtn}>
        <Text style={styles.detailsText}>Details</Text>
        <Image source={IMAGES.downArrow} style={styles.DropIcon} />
      </View>
    </TouchableOpacity>
  );
};
export default PackageList;
