import axios, { AxiosResponse } from "axios";
import { Response } from "../types/api";
import { Character } from "../types/characters";

export const CharacterService = {
  find: async (
    pageNumber: number,
    searchValue: string,
    filterStatus: string,
    filterSpecies: string
  ) => {
    const res: AxiosResponse<Response<Character[]>> = await axios.get(
      process.env.EXPO_PUBLIC_API_URL + `character?page=${pageNumber}&name=${searchValue}&status=${filterStatus}&species=${filterSpecies}`
    )
    return res.data
  },

  findByIds: async (
    characterIds: number[],
    searchValue: string,
    filterStatus: string,
    filterSpecies: string
  ) => {
    const res: AxiosResponse<Response<Character[]>> = await axios.get(
      process.env.EXPO_PUBLIC_API_URL + `character/${characterIds.join(',')}`
    )

    const charactersArray = Array.isArray(res.data) ? res.data : [res.data];

    const filteredCharacters: Character[] = charactersArray.filter(character => {
      const matchesName = character.name.toLowerCase().includes(searchValue.toLowerCase());
      const matchesStatus = filterStatus ? character.status.toLowerCase() === filterStatus.toLowerCase() : true;
      const matchesSpecies = filterSpecies ? character.species.toLowerCase() === filterSpecies.toLowerCase() : true;

      return matchesName && matchesStatus && matchesSpecies;
    });

    return filteredCharacters
  },
}