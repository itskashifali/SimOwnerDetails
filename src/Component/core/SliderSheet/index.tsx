import {Image, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './style';
import {SliderSheetProps} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {IMAGES} from '../../../assets';

const SliderSheet = (props: SliderSheetProps) => {
  const {refRBSheet, data, onpress} = props;

  return (
    <RBSheet
      ref={refRBSheet}
      useNativeDriver={true}
      openDuration={600}
      closeDuration={600}
      closeOnPressBack={true}
      customStyles={{
        wrapper: {backgroundColor: 'transparent'},
        draggableIcon: {},
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
          backgroundColor: COLOR.Primaray_light1,
          elevation: 10,
          height: 400,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}>
      <TouchableOpacity style={styles.BackBaR} onPress={onpress}>
        <Text style={{fontSize: 16, fontWeight: '500', color: COLOR.white}}>
          Close
        </Text>
        <Image source={IMAGES.downArrow} style={styles.close} />
      </TouchableOpacity>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.title}>Offer Details:</Text>
      <View>
        {data?.offerDetails?.map((item: any, index: any) => (
          <Text key={index} style={styles.offer}>
            {item?.offer}
          </Text>
        ))}
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingRight: '5%',
          marginTop: '2%',
        }}>
        <Text style={styles.title}>Duration:</Text>
        <Text style={styles.AnsTitle}>{data.validity}</Text>
      </View>
      <View
        style={{
          ...commonStyles.verticleView,
          paddingRight: '5%',
        }}>
        <Text style={styles.title}>Price:</Text>
        <Text style={styles.AnsTitle}>{data.price}(Incl. tax)</Text>
      </View>
      <View style={styles.ActivationText}>
        <Text
          style={{
            ...styles.activationCode,
            color: COLOR.black,
            textDecorationLine: 'none',
          }}>
          Activation Code:
        </Text>
        <Text style={styles.activationCode}>{data.activationCode}</Text>
      </View>
    </RBSheet>
  );
};
export default SliderSheet;
