import axios, { AxiosResponse } from "axios";
import { Response } from "../types/api";
import { Character } from "../types/characters";

export const CharacterService = {
  find: async (pageNumber: number, searchValue: string) => {
    const res: AxiosResponse<Response<Character[]>> = await axios.get(
      process.env.EXPO_PUBLIC_API_URL + `character?page=${pageNumber}&name=${searchValue}`
    )
    return res.data
  },

  findByIds: async (characterIds: number[], searchValue: string) => {
    const res: AxiosResponse<Response<Character[]>> = await axios.get(
      process.env.EXPO_PUBLIC_API_URL + `character/${characterIds.join(',')}`
    )

    const charactersArray = Array.isArray(res.data) ? res.data : [res.data];

    const filteredCharacters:Character[] = charactersArray.filter(character =>
      character.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredCharacters
  },

  findOne: async (id: number) => {
    const res: AxiosResponse<Character> = await axios.get(process.env.EXPO_PUBLIC_API_URL + `character/${id}`)
    return res.data
  }
}