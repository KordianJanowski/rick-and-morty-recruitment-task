import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './FilterCharactersBoxGroup.styled'
import { Checkbox } from 'react-native-paper';
import colors from '../../utils/constants/colors';

interface Props {
  filtersOptions: string[]
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  label: string
}

const FilterCharactersBoxGroup: React.FC<Props> = (props) => {
  const { filtersOptions, filter, setFilter, label } = props

  return (
    <View style={styles.filterCharactersBoxGroup}>
      <Text style={styles.filterCharactersBoxLabel}>{label}</Text>
      {
        filtersOptions.map(option => {
          return (
            <View key={option} style={styles.filterCharactersBoxOption}>
              <Checkbox
                status={filter === option ? 'checked' : 'unchecked'}
                onPress={() => setFilter(option)}
                color={colors.DarkGreen}
              />
              <Text style={styles.filterCharactersBoxText}>{option}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default FilterCharactersBoxGroup;