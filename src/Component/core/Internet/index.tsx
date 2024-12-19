import { FlatList, Text, View } from 'react-native';

import styles from './style';
import { SelectorProps } from '../../../data/Types';
import PackageList from '../../commen/PackageList';

const Internet = (props:SelectorProps) => {
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
 )
}
export default Internet
