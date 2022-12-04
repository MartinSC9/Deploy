import { orderAsc, orderDesc, orderRand, sortAscBNumberOfInhabitants, sortDescBNumberOfInhabitants } from "./order";

const initialState = {
  allCountries: [],
  countryDetails: {},
  activities: [],
  activitiesCountry: [],
  filterActivities: [],
  nextCountry: "",
  msg: "",
  word: "",
  error: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTER_ACTIVITIES":
      if (payload === "Todas las actividades") {
        return {
          ...state,
          filterActivities: state.activities
        }
      } else {
        let actividades = state.activities.filter(e => e.name === payload)
        return {
          ...state,
          filterActivities: actividades
        }
      }
    case "NEXT_COUNTRY":
      const country = state.allCountries[Math.floor(Math.random() * (250))]
      return {
        ...state,
        nextCountry: country.name
      }
    case "GET_ALL_ACTIVITIES":
      return {
        ...state,
        activities: payload,
        filterActivities: payload
      };
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        allCountries: payload,
      };

    case "ACTIVITY_COUNTRY":
      console.log(payload)
      return {
        ...state,
        activitiesCountry: payload
      }
    case "COUNTRY_DETAILS":
      return {
        ...state,
        countryDetails: payload
      };
    case "SORT":
      if (payload === "Paises ordenados de forma ascendente") return { ...state, allCountries: orderAsc(state) }
      if (payload === "Paises ordenados de forma descendente") return { ...state, allCountries: orderDesc(state) }
      if (payload === "Paises ordenados de forma aleatoria") return { ...state, allCountries: orderRand(state) }
      if (payload === "Paises ordenados por mayor cantidad de habitantes") return { ...state, allCountries: sortAscBNumberOfInhabitants(state) }
      if (payload === "Paises ordenados por menor cantidad de habitantes") return { ...state, allCountries: sortDescBNumberOfInhabitants(state) }
      else return { ...state }
    case "WORD":
      return {
        ...state,
        word: payload
      }
    case "SET_MSG":
      return {
        ...state,
        msg: payload
      }
    case "FIND_COUNTRY":
      return {
        ...state,
        allCountries: payload,
        msg: state.word ? payload.length > 1 ? `Se encontraron ${payload.length} resultados para "${state.word}"` : payload[0].msg ? `Se encontraron 0 resultados para "${state.word}"`
          : `Se encontró ${payload.length} resultado para "${state.word}"` : ""
      }

    case "FIND_COUNTRIES_CONTINENT":
      return {
        ...state,
        allCountries: payload
      }
    case "ERROR":
      return {
        ...state,
        error: payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
};

export default rootReducer;
