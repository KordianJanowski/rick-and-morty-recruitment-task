import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: '#162C1B',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: '#fff',
          fontSize: 14,
          fontFamily: 'DMMono_400Regular'
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveBackgroundColor: '#224229',
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'ALL CHARACTERS',
          tabBarIcon: () => (
            <Icon name="person" color={'#fff'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'LIKED CHARACTERS',
          tabBarIcon: () => (
            <Icon name="star" color={'#fff'} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
