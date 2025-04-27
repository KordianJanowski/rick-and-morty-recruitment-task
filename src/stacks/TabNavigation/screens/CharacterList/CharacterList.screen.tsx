import React, { useState } from 'react';
import { CharacterScreenLayout } from '../../../../components';
import { useInfiniteQuery } from '@tanstack/react-query'
import { CharacterService } from '../../../../utils/api/rick-and-morty.services';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['characters', searchValue],
    queryFn: ({ pageParam = 1 }) => CharacterService.find(pageParam, searchValue),
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
        <View style={styles.characterCard}>
          <View style={styles.characterCardInfoBox}>
            <Text style={styles.characterCardInfoBoxLabel}>Name</Text>
            <Text style={styles.characterCardInfoBoxText}>{item.name}</Text>
            <Text style={styles.characterCardInfoBoxLabel}>Status</Text>
            <Text style={styles.characterCardInfoBoxText}>{item.status}</Text>
            <Text style={styles.characterCardInfoBoxLabel}>Species</Text>
            <Text style={styles.characterCardInfoBoxText}>{item.species}</Text>
          </View>
          <View style={styles.characterCardImageBox}>
            <Image style={styles.characterCardImage} source={{ uri: item.image }} />
          </View>
        </View>
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

export default CharacterListScreen;
