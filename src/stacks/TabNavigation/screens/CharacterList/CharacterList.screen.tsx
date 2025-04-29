import React, { useState } from 'react';
import { CharacterScreenLayout, CharactedCard } from '../../../../components';
import { useInfiniteQuery } from '@tanstack/react-query'
import { CharacterService } from '../../../../utils/api/rick-and-morty.services';
import { FlatList } from 'react-native';
import { styles } from './CharacterList.styled';
import { Filters } from '../../../../utils/types/characters';

const CharacterListScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [appliedFilters, setAppliedFilters] = useState<Filters>({ status: '', species: '' })

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['characters', searchValue, appliedFilters],
    queryFn: ({ pageParam = 1 }) => CharacterService.find(pageParam, searchValue, appliedFilters.status, appliedFilters.species),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        const nextPageUrl = new URL(lastPage.info.next);
        const nextPageNumber = nextPageUrl.searchParams.get('page');
        return Number(nextPageNumber);
      }
      return undefined;
    },
  })

  const characters = data?.pages.flatMap(page => page.results) ?? [];

  return (
    <FlatList
      style={styles.container}
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.9}
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

export default CharacterListScreen;
