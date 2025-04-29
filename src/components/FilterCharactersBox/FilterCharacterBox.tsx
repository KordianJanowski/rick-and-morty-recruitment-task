import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
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
        filtersOptions={filtersStatusOptions}
        filter={filterStatus}
        setFilter={setFilterStatus}
      />
      <FilterCharactersBoxGroup
        filtersOptions={filtersSpeciesOptions}
        filter={filterSpecies}
        setFilter={setFilterSpecies}
      />
      <View style={styles.filterCharacterBoxButtonsContainer}>
        <TouchableOpacity
          onPress={clearFilters}
          style={styles.filterCharacterBoxButton}
        >
          <Text style={styles.filterCharacterBoxButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={applyFilters}
          style={[styles.filterCharacterBoxButton, styles.filterCharacterBoxButtonApply]}
        >
          <Text style={[styles.filterCharacterBoxButtonText, styles.filterCharacterBoxButtonTextApply]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FilterCharacterBox;