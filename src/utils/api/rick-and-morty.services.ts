import axios, { AxiosResponse } from "axios";
import { Response } from "../types/api";
import { Character } from "../types/characters";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/"

export const CharacterService = {
  find: async () => {
    const res: AxiosResponse<Response<Character[]>> = await axios.get(RICK_AND_MORTY_API_URL + `character`)
    return res.data.results
  },

  findOne: async (id: number) => {
    const res: Character = await axios.get(RICK_AND_MORTY_API_URL + `character/${id}`)
    return res
  }
}