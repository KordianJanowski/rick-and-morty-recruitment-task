import React from 'react'
import { styles } from './CharacterCard.styled'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp } from '../../stacks/Main/Main.routes';
import { Character } from '../../utils/types/characters';
import { useLiked } from '../../context/LikedContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/constants/colors';

interface Props {
  character: Character
}

const CharactedCard: React.FC<Props> = (props) => {
  const { character } = props
  const navigation = useNavigation<MainStackNavigationProp>();
  const { isCharacterLiked, addLikedCharacter, removeLikedCharacter } = useLiked();

  const toggleLike = (characterId: number) => {
    if (isCharacterLiked(characterId)) {
      removeLikedCharacter(characterId);
    } else {
      addLikedCharacter(characterId);
    }
  };

  const navigateToCharacterDetails = (character: Character) => {
    navigation.navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });
  }

  return (
    <TouchableOpacity onPress={() => navigateToCharacterDetails(character)} style={styles.characterCard}>
      <View style={styles.characterCardInfoBox}>
        <Text style={styles.characterCardInfoBoxLabel}>Name</Text>
        <Text style={styles.characterCardInfoBoxText}>{character.name}</Text>
        <Text style={styles.characterCardInfoBoxLabel}>Status</Text>
        <Text style={styles.characterCardInfoBoxText}>{character.status}</Text>
        <Text style={styles.characterCardInfoBoxLabel}>Species</Text>
        <Text style={styles.characterCardInfoBoxText}>{character.species}</Text>
      </View>
      <View style={styles.characterCardImageBox}>
        <Image style={styles.characterCardImage} source={{ uri: character.image }} />
        <TouchableOpacity
          onPress={() => toggleLike(character.id)}
          style={[styles.likeCharacterToggleButton, isCharacterLiked(character.id) && styles.likedCharacterBtnBgColor]}
        >
          <Icon
            name={isCharacterLiked(character.id) ? "star" : "star-border"}
            color={isCharacterLiked(character.id) ? colors.Accent : colors.PrimaryGreen}
            size={18}
          />
          <Text style={styles.likeCharacterToggleButtonText}>Like</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default CharactedCard;