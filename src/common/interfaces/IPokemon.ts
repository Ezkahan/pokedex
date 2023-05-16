export interface IPokemonFetch {
  count: number;
  next?: string;
  previous?: string;
  results?: IPokemonList[];
}

export interface IPokemonList {
  name: string;
  url: string;
}

export interface IPokemon {
  abilities: IPokemonAbility[];
  base_experience: number;
  forms: IPokemonForm[];
  game_indices: IPokemonGameIndex[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMove[];
  name: string;
  order: number;
  past_types: [];
  species: IPokemonSpecie;
  sprites: IPokemonSprite;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}

export interface IPokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonForm {
  name: string;
  url: string;
}

export interface IPokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface IPokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}

export interface IPokemonSpecie {
  name: string;
  url: string;
}

export interface IPokemonSprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
}

export interface IPokemonStat {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
  effort: number;
}

export interface IPokemonType {
  type: {
    name: string;
    url: string;
  };
  slot: number;
}
