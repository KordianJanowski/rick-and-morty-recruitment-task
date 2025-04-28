import {Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './CharacterDetails.styled';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Character } from '../../../../utils/types/characters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../utils/constants/colors';
import { useLiked } from '../../../../context/LikedContext';

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
              <View style={[styles.characterInfoTile, styles.tileMarginRight]}>
                <Text style={styles.characterInfoTileLabel}>Status</Text>
                <Text style={styles.characterInfoTileText}>{character.status}</Text>
              </View>
              <View style={[styles.characterInfoTile, styles.tileMarginLeft]}>
                <Text style={styles.characterInfoTileLabel}>Origin</Text>
                <Text style={styles.characterInfoTileText}>{character.origin.name}</Text>
              </View>
            </View>
            <View style={styles.characterInfoTilesRow}>
              <View style={[styles.characterInfoTile, styles.tileMarginRight]}>
                <Text style={styles.characterInfoTileLabel}>Species</Text>
                <Text style={styles.characterInfoTileText}>{character.species}</Text>
              </View>
              <View style={[styles.characterInfoTile, styles.tileMarginLeft]}>
                <Text style={styles.characterInfoTileLabel}>Gender</Text>
                <Text style={styles.characterInfoTileText}>{character.gender}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={toggleLike} style={styles.likeCharacterToggleButton}>
            {
              characterLiked ?
                <>
                  <Icon name="star" size={18} color={colors.Accent} />
                  <Text style={styles.likeCharacterToggleButtonText}>Remove from liked</Text>
                </>
              :
                <>
                  <Icon name="star-border" size={18} color={'#FFFFFF'} />
                  <Text style={styles.likeCharacterToggleButtonText}>Add to liked</Text>
                </>
            }
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
