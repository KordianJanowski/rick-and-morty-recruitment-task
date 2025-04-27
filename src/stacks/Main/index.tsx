import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterDetailsStack} from '../CharacterDetails';
import {TabNavigationStack} from '../TabNavigation';
import {MainStackRoutes} from './Main.routes';
import { Image } from 'react-native';
import colors from '../../utils/constants/colors';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.DarkGreen,
        },
        headerTitle: () => (
          <Image
            source={require('../../../assets/rick-and-morty.png')}
          />
        ),
        headerBackVisible: false
      }}
    >
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Tab.Navigator>
  );
};
