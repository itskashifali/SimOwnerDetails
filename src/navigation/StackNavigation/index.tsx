import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../../screen';
import SCREEN from '../../data/ScrName';
import DrawerNavigations from '../DrawerNavigations';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.DrawerNavigations} component={DrawerNavigations} />
        <Stack.Screen name={SCREEN.SimDetails} component={screens.SimDetails} />
        <Stack.Screen
          name={SCREEN.SimTracking}
          component={screens.SimTracking}
        />
        <Stack.Screen
          name={SCREEN.JazzPackages}
          component={screens.JazzPackages}
        />
        <Stack.Screen
          name={SCREEN.ZongPackages}
          component={screens.ZongPackages}
        />
        <Stack.Screen
          name={SCREEN.UfonePackages}
          component={screens.UfonePackages}
        />
        <Stack.Screen
          name={SCREEN.TelenorPackages}
          component={screens.TelenorPackages}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
