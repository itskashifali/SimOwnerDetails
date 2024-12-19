import {StatusBar, Text, View} from 'react-native';
import FlashMessage from "react-native-flash-message";
import StackNavigation from './src/navigation/StackNavigation';
import {COLOR} from './src/themes/StyleGuides';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const SimDetails = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen after app is loaded
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLOR.primary} />
      <StackNavigation />
      <FlashMessage position="top" /> 
    </View>
  );
};
export default SimDetails;
