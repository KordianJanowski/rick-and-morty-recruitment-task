import {Image, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {styles} from './CharacterDetails.styled';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Character } from '../../../../utils/types/characters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../utils/constants/colors';
import { useLiked } from '../../../../context/LikedContext';
import { CharacterInfoTile } from '../../../../components';
import { CharacterInfoTileMarginEnum } from '../../../../utils/types/styles';

const CharacterDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { character } = route.params as { character: Character };
  const { isCharacterLiked, addLikedCharacter, removeLikedCharacter } = useLiked();
  const [characterLiked, setCharacterLiked] = useState<boolean>(isCharacterLiked(character.id))

  const toggleLike = () => {
    if (isCharacterLiked(character.id)) {
      setCharacterLiked(false)
      removeLikedCharacter(character.id);
    } else {
      setCharacterLiked(true)
      addLikedCharacter(character.id);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.goBackButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}
          >
            <Icon name="arrow-back" size={16} color={colors.MediumGreen} />
            <Text style={styles.goBackButtonText}>Go back to Characters List</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.characterDetails}>
          <Image style={styles.characterCardImage} source={{ uri: character.image }} />
          <View style={styles.characterCardHeader}>
            <Text style={styles.characterCardHeaderLabel}>Name</Text>
            <Text style={styles.characterCardHeaderText}>{character.name}</Text>
          </View>
          <View style={styles.characterInfoTiles}>
            <View style={styles.characterInfoTilesRow}>
              <CharacterInfoTile
                margin={CharacterInfoTileMarginEnum.right}
                label='Status'
                text={character.status}
              />
              <CharacterInfoTile
                margin={CharacterInfoTileMarginEnum.left}
                label='Origin'
                text={character.origin.name}
              />
            </View>
            <View style={styles.characterInfoTilesRow}>
              <CharacterInfoTile
                margin={CharacterInfoTileMarginEnum.right}
                label='Species'
                text={character.species}
              />
              <CharacterInfoTile
                margin={CharacterInfoTileMarginEnum.left}
                label='Gender'
                text={character.gender}
              />
            </View>
          </View>
          <Pressable
            onPress={toggleLike}
            style={({ pressed }) => [
              styles.likeCharacterToggleButton,
              pressed && styles.likeCharacterToggleButtonPressed,
            ]}
          >
            <Icon
              name={characterLiked ? "star" : "star-border"}
              color={characterLiked ? colors.Accent : "#FFFFFF"}
              size={18}
            />
            <Text style={styles.likeCharacterToggleButtonText}>
              { characterLiked ? "Remove from liked" : "Add to liked"}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
