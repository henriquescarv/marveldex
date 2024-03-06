import { HeroActionTypes, HeroState } from "./hero.types";

const initialState: HeroState = {
  characters: {
    loading: false,
    filter: '',
    totalItems: 0,
    list: [],
  },
  details: {
    loading: false,
    data: {},
    comics: [],
  }
};

const HeroReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case HeroActionTypes.SET_LOADING_CHARACTERS:
      const { loading } = action.payload;

      return {
        ...state,
        characters: {
          ...state.characters,
          loading: loading,
        },
      }
    case HeroActionTypes.SET_HERO_FILTER:
      const { filter } = action.payload;

      return {
        ...state,
        characters: {
          ...state.characters,
          filter: filter,
        },
      }
    case HeroActionTypes.CLEAR_CHARACTERS_LIST:
      return {
        ...state,
        characters: {
          ...state.characters,
          list: [],
        },
      }
    case HeroActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          totalItems: action.payload.data.total,
          list: [
            ...state.characters.list,
            ...action.payload.data.results
          ],
        },
      }
    case HeroActionTypes.SET_LOADING_CHARACTER_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: action.payload,
        }
      }
    case HeroActionTypes.SET_CHARACTER_DETAILS:
      const { characterDetails, characterComics } = action.payload;

      return {
        ...state,
        details: {
          ...state.details,
          data: characterDetails.data.results[0],
          comics: characterComics.data.results,
        }
      }
    case HeroActionTypes.CLEAR_HERO_STATE:
      return {
        ...initialState,
      }
    default:
      return {
        ...state,
      }
  }
};

export default HeroReducer;
