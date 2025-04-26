import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import { Text } from '@react-navigation/elements';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: () => null,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#59695C', borderBottomWidth: 1 }}
          >
            <Icon name="arrow-back" size={16} color="#59695C" />
            <Text style={{ marginLeft: 5, fontSize: 12, color: '#59695C', fontFamily: 'Inter_400Regular' }}>Go back to Characters List</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
