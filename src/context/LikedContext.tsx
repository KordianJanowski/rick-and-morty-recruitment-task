import React, { createContext, useContext, useState, ReactNode } from 'react';

type LikedCharacterId = number;

interface LikedContextType {
  likedCharacters: LikedCharacterId[];
  addLikedCharacter: (characterId: LikedCharacterId) => void;
  removeLikedCharacter: (characterId: LikedCharacterId) => void;
  isCharacterLiked: (characterId: LikedCharacterId) => boolean;
}

export const LikedContext = createContext<LikedContextType | undefined>(undefined);

export const LikedProvider = ({ children }: { children: ReactNode }) => {
  const [likedCharacters, setLikedCharacters] = useState<LikedCharacterId[]>([]);

  const addLikedCharacter = (characterId: LikedCharacterId) => {
    setLikedCharacters((prev) => [...prev, characterId]);
  };

  const removeLikedCharacter = (characterId: LikedCharacterId) => {
    setLikedCharacters((prev) => prev.filter((id) => id !== characterId));
  };

  const isCharacterLiked = (characterId: LikedCharacterId) => {
    return likedCharacters.includes(characterId);
  };

  return (
    <LikedContext.Provider value={{ likedCharacters, addLikedCharacter, removeLikedCharacter, isCharacterLiked }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLiked = () => {
  const context = useContext(LikedContext);
  if (context === undefined) {
    throw new Error('useLiked must be used within a LikedProvider');
  }
  return context;
};
