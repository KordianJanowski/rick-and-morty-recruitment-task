import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './CharacterListLayout.styled';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../utils/constants/colors';
import FilterCharacterBox from '../../FilterCharactersBox';
import { Filters } from '../../../utils/types/characters';

interface Props {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  setAppliedFilters: React.Dispatch<React.SetStateAction<Filters>>
};

const CharacterScreenLayout: React.FC<Props> = (props) => {
  const [isClearBtnFocused, setIsClearBtnFocused] = useState<boolean>(false)
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false)
  const {
    searchValue,
    setSearchValue,
    setAppliedFilters
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Characters</Text>
      <View style={styles.searchCharactersBar}>
        <Icon name="search" size={24} color={colors.DarkGreen} />
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
              <Icon name="close" size={20} color={colors.DarkGreen} />
            </TouchableOpacity>
        }
      </View>
      <TouchableOpacity
        onPress={() => setIsFiltersVisible(value => !value)}
        style={[styles.filterCharactersButton, isFiltersVisible && styles.filterCharactersButtonVisible]}
      >
        <Text style={styles.filterCharactersButtonText}>FILTER</Text>
        <Icon name={`keyboard-arrow-${isFiltersVisible ? 'up' : 'down'}`} size={16} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={!isFiltersVisible && styles.filterCharacterBoxHidden}>
        <FilterCharacterBox
          setAppliedFilters={setAppliedFilters}
        />
      </View>
    </View>
  );
};

export default CharacterScreenLayout;