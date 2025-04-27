import React, { useState } from 'react';
import { CharacterScreenLayout } from '../../../../components';

const FavoriteCharactersScreen = () => {
    const [searchValue, setSearchValue] = useState<string>('')


  return (
    <CharacterScreenLayout
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export default FavoriteCharactersScreen;
