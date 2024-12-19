import {View} from 'react-native';
import styles from './style';
import Header from '../../Component/commen/Header';
import {IMAGES} from '../../assets';
import {useRef, useState} from 'react';
import Selector from '../../Component/commen/Selector';
import Call from '../../Component/core/Call';
import SMS from '../../Component/core/SMS';
import Internet from '../../Component/core/Internet';
import SliderSheet from '../../Component/core/SliderSheet';
import {
  TelenorCallPackagesList,
  TelenorInternetPackagesList,
  TelenorSMSPackagesList,
} from '../../data/DummayData';
const TelenorPackages = (props: any) => {
  const refRBSheet = useRef();
  const {navigation} = props;
  const [seletor, setSelector] = useState(0);
  const [callData, setCallData] = useState('');
  console.log(callData);
  return (
    <View style={styles.container}>
      <Header
        title="Telenor Packages"
        icons={IMAGES.Back}
        firstOnpress={() => navigation.goBack()}
      />
      <Selector onPress={(e: number) => setSelector(e)} selector={seletor} />

      {seletor == 0 ? (
        <Call
          data={TelenorCallPackagesList}
          onPress={(e: any) => {
            setCallData(e), refRBSheet.current.open();
          }}
        />
      ) : seletor == 1 ? (
        <SMS
          data={TelenorSMSPackagesList}
          onPress={(e: any) => {
            setCallData(e), refRBSheet.current.open();
          }}
        />
      ) : (
        <Internet
          data={TelenorInternetPackagesList}
          onPress={(e: any) => {
            setCallData(e), refRBSheet.current.open();
          }}
        />
      )}
      <SliderSheet
        refRBSheet={refRBSheet}
        data={callData}
        onpress={() => refRBSheet.current.close()}
      />
    </View>
  );
};
export default TelenorPackages;
