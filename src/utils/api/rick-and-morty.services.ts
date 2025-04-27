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

  findOne: async (id: number) => {
    const res: AxiosResponse<Character> = await axios.get(process.env.EXPO_PUBLIC_API_URL + `character/${id}`)
    return res
  }
}