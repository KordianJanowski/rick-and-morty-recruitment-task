import React, { useState } from 'react';
import { CharactedCard, CharacterScreenLayout } from '../../../../components';
import { FlatList } from 'react-native';
import { styles } from './FavoriteCharacters.styled';
import { CharacterService } from '../../../../utils/api/rick-and-morty.services';
import { useQuery } from '@tanstack/react-query';
import { useLiked } from '../../../../context/LikedContext';

const FavoriteCharactersScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const { likedCharacters } = useLiked()

  const { data } = useQuery({
    queryKey: ['characters', searchValue, likedCharacters],
    queryFn: () => CharacterService.findByIds(likedCharacters, searchValue),
  })

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharactedCard character={item} />
      )}
      ListHeaderComponent={
        <CharacterScreenLayout
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      }
    />
  )
};

export default FavoriteCharactersScreen;
