import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView, // For the loader
} from 'react-native';
import styles from './style';
import Header from '../../Component/commen/Header';
import {IMAGES} from '../../assets';
import {useEffect, useState} from 'react';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';
import {showErrorToast} from '../../data/Toast';

const SimTracking = (props: any) => {
  const {navigation} = props;
  const [contactNumber, setContactNumber] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [noData, setNoData] = useState(false); // Loading state
  const fetchDetails = async () => {
    if (contactNumber.length !== 13) {
      showErrorToast('Please enter a complete 13-digit CNIC number');
      return;
    }

    setLoading(true); // Show the loader when fetching starts
    const firstUrl = `https://paksimdetails.xyz/K/Zawar.php?search=${contactNumber}&type=mobile`;
    const secondUrl = `https://paksimdetails.xyz/K/Komal.php?search=${contactNumber}&type=mobile`;

    try {
      let response = await fetch(firstUrl);

      if (response.ok) {
        const data = await response.text();
        if (data) {
          const parsedData = JSON.parse(data.replace('Mobile response: ', ''));
          console.log('First URL Response Data:', parsedData);

          if (parsedData?.error) {
            setNoData(true);
            showErrorToast('Records Not Found');
          } else {
            setNoData(false);
          }

          setResult(parsedData);
          setError(null);
          setLoading(false);
          return;
        }
      }

      // If first URL fails, proceed to the second URL
      response = await fetch(secondUrl);
      if (response.ok) {
        const data = await response.text();
        const parsedData = JSON.parse(data.replace('Mobile response: ', ''));
        console.log('Second URL Response Data:', parsedData);

        if (parsedData?.error) {
          setNoData(true);
          showErrorToast('Records Not Found');
        } else {
          setNoData(false);
        }

        setResult(parsedData);
        setError(null);
        setLoading(false);
      } else {
        throw new Error(
          `Failed to fetch data from second URL. Status: ${response.status}`,
        );
      }
    } catch (err: any) {
      console.error('Fetch Error:', err);
      setError(err.message);
      setResult([]);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="CNIC Details"
        icons={IMAGES.Back}
        firstOnpress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.SearchMainContainer}>
          <View style={styles.SearchContainer}>
            <TextInput
              maxLength={13}
              style={styles.input}
              placeholder="Enter CNIC Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="numeric"
              placeholderTextColor={COLOR.gray}
              onSubmitEditing={fetchDetails}
              returnKeyType="search"
            />

            <Image
              source={IMAGES.search}
              style={{width: 23, height: 23, resizeMode: 'contain'}}
            />
          </View>
          <TouchableOpacity onPress={fetchDetails} style={styles.searchBTn}>
            <Text style={styles.SearcText}>Seacrh Details </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {noData ? (
            <View style={{...commonStyles.center}}>
              <Text style={styles.Error}>
                Records Not Found.Contact Whatsapp to Get Details ( Its Paid )
              </Text>
            </View>
          ) : (
            <View>
              {loading ? ( // Display the loader while fetching data
                <View style={{...commonStyles.center, flex: 1}}>
                  <ActivityIndicator size="large" color={COLOR.primary} />
                </View>
              ) : error ? (
                <Text style={styles.error}>Error: {error}</Text>
              ) : (
                result.length > 0 && (
                  <View style={styles.resultContainer}>
                    {result.map((item, index) => (
                      <View key={index} style={styles.box}>
                        <Text style={styles.label}>Number:</Text>
                        <Text style={styles.dataText}>{item?.nbr}</Text>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.dataText}>{item?.nam}</Text>
                        <Text style={styles.label}>CNIC:</Text>
                        <Text style={styles.dataText}>{item?.cni}</Text>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.dataText}>{item?.adr}</Text>
                      </View>
                    ))}
                  </View>
                )
              )}
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default SimTracking;
