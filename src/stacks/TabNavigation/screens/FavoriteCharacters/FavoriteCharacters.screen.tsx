import React, { useState } from 'react';
import { CharactedCard, CharacterScreenLayout } from '../../../../components';
import { FlatList } from 'react-native';
import { styles } from './FavoriteCharacters.styled';
import { CharacterService } from '../../../../utils/api/rick-and-morty.services';
import { useQuery } from '@tanstack/react-query';
import { useLiked } from '../../../../context/LikedContext';
import { Filters } from '../../../../utils/types/characters';

const FavoriteCharactersScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('')
    const [appliedFilters, setAppliedFilters] = useState<Filters>({ status: '', species: '' })
  const { likedCharacters } = useLiked()

  const { data } = useQuery({
    queryKey: ['characters', searchValue, likedCharacters, appliedFilters],
    queryFn: () => CharacterService.findByIds(likedCharacters, searchValue, appliedFilters.status, appliedFilters.species),
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
          setAppliedFilters={setAppliedFilters}
        />
      }
    />
  )
};

export default FavoriteCharactersScreen;
