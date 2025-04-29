import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native';
import { Filters, filtersSpeciesOptions, filtersStatusOptions } from '../../utils/types/characters';
import FilterCharactersBoxGroup from '../FilterCharactersBoxGroup';
import { styles } from './FilterCharacterBox.styled';

interface Props {
  setAppliedFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const FilterCharacterBox: React.FC<Props> = (props) => {
  const { setAppliedFilters } = props
  const [filterStatus, setFilterStatus] = useState<string>('')
  const [filterSpecies, setFilterSpecies] = useState<string>('')

  const clearFilters = () => {
    setFilterSpecies('')
    setFilterStatus('')
    setAppliedFilters({
      status: '',
      species: ''
    })
  }

  const applyFilters = () => {
    setAppliedFilters({
      status: filterStatus,
      species: filterSpecies
    })
  }

  return (
    <View style={styles.filterCharactersBox}>
      <FilterCharactersBoxGroup
        label='Status'
        filtersOptions={filtersStatusOptions}
        filter={filterStatus}
        setFilter={setFilterStatus}
        />
      <FilterCharactersBoxGroup
        label='Species'
        filtersOptions={filtersSpeciesOptions}
        filter={filterSpecies}
        setFilter={setFilterSpecies}
      />
      <View style={styles.filterCharacterBoxButtonsContainer}>
        <Pressable
          onPress={clearFilters}
          style={({ pressed }) => [
            styles.filterCharacterBoxButton,
            pressed && styles.filterCharacterBoxButtonPressed
          ]}
        >
          <Text style={styles.filterCharacterBoxButtonText}>Reset</Text>
        </Pressable>
        <Pressable
          onPress={applyFilters}
          style={({ pressed }) => [
            styles.filterCharacterBoxButton, styles.filterCharacterBoxButtonApply,
            pressed && styles.filterCharacterBoxButtonApplyPressed
          ]}
        >
          <Text style={[styles.filterCharacterBoxButtonText, styles.filterCharacterBoxButtonTextApply]}>Apply</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FilterCharacterBox;