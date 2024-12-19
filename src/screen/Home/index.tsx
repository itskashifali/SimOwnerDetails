import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNExitApp from 'react-native-exit-app';
import Header from '../../Component/commen/Header';
import BottonTab from '../../Component/commen/BottonTab';
import {IMAGES} from '../../assets';
import SCREEN from '../../data/ScrName';
import styles from './style';
import DisclaimerModal from '../../Component/core/DisclaimerModal';

const Home = props => {
  const {navigation} = props;
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Check if the user has already agreed to the terms
  useEffect(() => {
    const checkFirstLaunch = async () => {
      const agreed = await AsyncStorage.getItem('termsAgreed');
      if (!agreed) {
        setShowDisclaimer(true);
      }
    };
    checkFirstLaunch();
  }, []);

  // Handle user's agreement
  const handleAgree = async () => {
    await AsyncStorage.setItem('termsAgreed', 'true');
    setShowDisclaimer(false);
  };

  // Handle user's disagreement
  const handleDisagree = () => {
    Alert.alert(
      'Agreement Required',
      'You must agree to the terms to use the app.',
      [
        {text: 'Exit App', onPress: () => RNExitApp.exitApp()},
        {text: 'Cancel', style: 'cancel'},
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* Disclaimer Modal */}
      <DisclaimerModal
        visible={showDisclaimer}
        onAgree={handleAgree}
        onDisagree={handleDisagree}
      />
      <Header
        title="Sim Owner Details"
        firstOnpress={() => navigation.openDrawer()}
      />
      <View style={styles.TabContiner}>
        <BottonTab
          title="SIM Details"
          images={IMAGES.userInfo}
          discription="Get details of any SIM card owner"
          onpress={() => navigation.navigate(SCREEN.SimDetails)}
        />
        <BottonTab
          title="CNIC Details"
          images={IMAGES.id_card}
          discription="Enter CNIC to view linked SIM details"
          onpress={() => navigation.navigate(SCREEN.SimTracking)}
        />
        <BottonTab
          title="Jazz Packages"
          images={IMAGES.sim_card}
          discription="Explore SIM plans for calls SMS & data"
          onpress={() => navigation.navigate(SCREEN.JazzPackages)}
        />
        <BottonTab
          title="Zong Packages"
          images={IMAGES.sim_card}
          discription="Explore SIM plans for calls SMS & data"
          onpress={() => navigation.navigate(SCREEN.ZongPackages)}
        />
        <BottonTab
          title="Ufone Packages"
          images={IMAGES.sim_card}
          discription="Explore SIM plans for calls SMS & data"
          onpress={() => navigation.navigate(SCREEN.UfonePackages)}
        />
        <BottonTab
          title="Telenor Packages"
          images={IMAGES.sim_card}
          discription="Explore SIM plans for calls SMS & data"
          onpress={() => navigation.navigate(SCREEN.TelenorPackages)}
        />
      </View>
    </View>
  );
};

export default Home;
