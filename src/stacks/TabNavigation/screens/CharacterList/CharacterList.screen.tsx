import React, { useEffect, useState } from 'react';
import { CharacterScreenLayout } from '../../../../components';
import { useQuery } from '@tanstack/react-query'
import { CharacterService } from '../../../../utils/api/rick-and-morty.services';
import { Character } from '../../../../utils/types/characters';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const charactersResponse = useQuery({ queryKey: ['characters'], queryFn: CharacterService.find })
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    if(charactersResponse.error) return

    if(charactersResponse.data) setCharacters(charactersResponse.data)
  }, [charactersResponse.isLoading]);

  return (
    <FlatList
      style={styles.container}
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.characterCard}>
          <View style={styles.characterCardInfoBox}>
            <Text>{item.name}</Text>
            <Text>{item.status} - {item.species}</Text>
          </View>
          <Image style={styles.characterCardImage} source={{ uri: item.image }} />
        </View>
      )}
      ListHeaderComponent={
        <CharacterScreenLayout></CharacterScreenLayout>
      }
    />
  )
};

export default CharacterListScreen;
