import { Credentials } from "../common/common.types";
import { HeroActionTypes } from "./hero.types";

const requestCharacters = ({ publicKey, privateKey, offset = 0, limit = 70 }: Credentials) => ({
  type: HeroActionTypes.REQUEST_CHARACTERS,
  payload: { publicKey, privateKey, offset, limit },
});

const setCharacters = (payload: any) => ({
  type: HeroActionTypes.SET_CHARACTERS,
  payload
});

const setLoadingCharacters = (loading: boolean) => ({
  type: HeroActionTypes.SET_LOADING_CHARACTERS,
  payload: { loading },
});

const clearAllState = () => ({ type: HeroActionTypes.CLEAR_HERO_STATE });
const clearCharactersList = () => ({ type: HeroActionTypes.CLEAR_CHARACTERS_LIST });
const setFilter = (filter: string) => ({ type: HeroActionTypes.SET_HERO_FILTER, payload: { filter } });

const actions = {
  characters: {
    request: requestCharacters,
    setLoading: setLoadingCharacters,
    set: setCharacters,
    clearList: clearCharactersList,
    setFilter: setFilter,
    clearAll: clearAllState,
  }
};

export default actions;
