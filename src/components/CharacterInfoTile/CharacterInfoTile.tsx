import React from 'react'
import { View, Text } from 'react-native';
import { CharacterInfoTileMarginEnum } from '../../utils/types/styles';
import { styles } from './CharacterInfoTile.styled';

interface Props {
  margin: CharacterInfoTileMarginEnum
  label: string,
  text: string
}

const CharacterInfoTile: React.FC<Props> = (props) => {
  const { margin, label, text } = props

  return (
    <View
      style={[
        styles.characterInfoTile,
        margin === CharacterInfoTileMarginEnum.right ? styles.tileMarginRight : styles.tileMarginLeft
      ]}>
      <Text style={styles.characterInfoTileLabel}>{label}</Text>
      <Text style={styles.characterInfoTileText}>{text}</Text>
    </View>
  )
}

export default CharacterInfoTile;