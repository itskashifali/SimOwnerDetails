import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Share from 'react-native-share';
import {COLOR} from '../../themes/StyleGuides';
import SCREEN from '../../data/ScrName';
import * as screens from '../../screen';
import {IMAGES} from '../../assets';
import {styles} from './style';

const Drawer = createDrawerNavigator();

// Custom Drawer Content
const CustomDrawerContent = (props: any) => {
  const {navigation, state} = props;

  // Get the current active route name
  const currentRoute = state?.routeNames[state?.index] ?? '';

  // Share App Functionality
  const handleShareApp = async () => {
    try {
      await Share.open({
        title: 'Share App',
        message: 'Check out this amazing app!',
        url: 'https://example.com', // Replace with your app's link
      });
    } catch (error) {
      // console.error('Error sharing app:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation Buttons */}
      <TouchableOpacity
        style={[
          styles.drawerItem,
          currentRoute === SCREEN.Home && styles.activeDrawerItem,
        ]}
        onPress={() => navigation.navigate(SCREEN.Home)}>
        <Image
          source={IMAGES.home}
          style={[
            styles.icon,
            {
              tintColor:
                currentRoute === SCREEN.Home ? COLOR.white : COLOR.black,
            },
          ]}
        />
        <Text
          style={[
            styles.text,
            {color: currentRoute === SCREEN.Home ? COLOR.white : COLOR.black},
          ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.drawerItem,
          currentRoute === SCREEN.TermAndCondition && styles.activeDrawerItem,
        ]}
        onPress={() => navigation.navigate(SCREEN.TermAndCondition)}>
        <Image
          source={IMAGES.terms_conditions}
          style={[
            styles.icon,
            {
              tintColor:
                currentRoute === SCREEN.TermAndCondition
                  ? COLOR.white
                  : COLOR.black,
                  width:30,
                  height:25
            },
          ]}
        />
        <Text
          style={[
            styles.text,
            {
              color:
                currentRoute === SCREEN.TermAndCondition
                  ? COLOR.white
                  : COLOR.black,
            },
          ]}>
          Term and Condition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerItem,
          currentRoute === SCREEN.About && styles.activeDrawerItem,
        ]}
        onPress={() => navigation.navigate(SCREEN.About)}>
        <Image
          source={IMAGES.About}
          style={[
            styles.icon,
            {
              tintColor:
                currentRoute === SCREEN.About ? COLOR.white : COLOR.black,
            },
          ]}
        />
        <Text
          style={[
            styles.text,
            {
              color: currentRoute === SCREEN.About ? COLOR.white : COLOR.black,
            },
          ]}>
          About
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton} onPress={handleShareApp}>
        <Image source={IMAGES.share} style={styles.icon} />
        <Text style={styles.text}>Share App</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigations = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 240,
          height: '95%',
          marginTop: '14%',
          borderTopRightRadius: 30,
          backgroundColor: COLOR.Primaray_light1,
          elevation: 10,
        },
        overlayColor: 'transparent',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={SCREEN.Home}
        component={screens.Home}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={IMAGES.home}
              style={[styles.icon, {tintColor: focused ? 'blue' : 'gray'}]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={SCREEN.TermAndCondition}
        component={screens.TermAndCondition}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={IMAGES.terms_conditions}
              style={[styles.icon, {tintColor: focused ? 'blue' : 'gray'}]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={SCREEN.About}
        component={screens.About}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={IMAGES.terms_conditions}
              style={[styles.icon, {tintColor: focused ? 'blue' : 'gray'}]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;
