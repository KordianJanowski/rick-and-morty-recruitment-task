export type Character = {
  id: number
  name: string,
  status: string,
  species: string,
  gender: string,
  origin: {
    name: string
  }
  image: string
}
''
export type Filters = {
  status: FilterSpeciesOptionsEnum | string
  species: FilterSpeciesOptionsEnum | string
}

export enum FilterStatusOptionsEnum {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}
export const filtersStatusOptions = Object.values(FilterStatusOptionsEnum);

export enum FilterSpeciesOptionsEnum {
  Human = "Human",
  Humanoid = "Humanoid",
}
export const filtersSpeciesOptions = Object.values(FilterSpeciesOptionsEnum);