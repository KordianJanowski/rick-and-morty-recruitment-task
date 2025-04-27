import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
import {styles} from './CharacterListLayout.styled';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  children?: React.ReactNode;
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
};

const CharacterScreenLayout: React.FC<Props> = (props) => {
  const { children, searchValue, setSearchValue } = props
  const [isClearBtnFocused, setIsClearBtnFocused] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Characters</Text>
      <View style={styles.searchCharactersBar}>
        <Icon name="search" size={24} color="#162C1B" />
        <TextInput
          style={styles.searchCharactersBarTextInput}
          placeholder='Search the characters'
          value={searchValue}
          onChangeText={setSearchValue}
        />
        {
          searchValue.length > 0 &&
            <TouchableOpacity
              onPress={() => setSearchValue('')}
              onPressIn={() => setIsClearBtnFocused(true)}
              onPressOut={() => setIsClearBtnFocused(false)}
              style={isClearBtnFocused && styles.searchCharacterBarClearBtnFocused}
            >
              <Icon name="close" size={20} color="#162C1B" />
            </TouchableOpacity>
        }
      </View>
      <TouchableOpacity style={styles.filterCharactersButton}>
        <Text style={styles.filterCharactersButtonText}>FILTER</Text>
        <Icon name="keyboard-arrow-down" size={16} color="#FFFFFF" />
      </TouchableOpacity>
      <View>
        {children}
      </View>
    </View>
  );
};

export default CharacterScreenLayout;