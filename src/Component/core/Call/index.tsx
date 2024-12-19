import {FlatList, Text, View} from 'react-native';

import styles from './style';
import {JazzCallPackagesList} from '../../../data/DummayData';
import PackageList from '../../commen/PackageList';
import { SelectorProps } from '../../../data/Types';

const Call = (props:SelectorProps) => {
  const{onPress,data}=props

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PackageList
            name={item.name}
            price={item.price}
            validity={item.validity}
            offerDetails={item.offerDetails}
            activationCode={item.activationCode}
            onpress={()=>onPress(item)}
          />
        )}
      />
    </View>
  );
};
export default Call;
