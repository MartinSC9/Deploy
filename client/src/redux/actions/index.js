import activities_ from "./axios/activities";
import continent from "./axios/continent";
import countries from "./axios/countries";
import details from "./axios/details";
import find from "./axios/find";
import findActivity from "./axios/findActivity"

export const getAllCountries = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "GET_ALL_COUNTRIES",
        payload: await countries(),
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

export const getAllActivities = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "GET_ALL_ACTIVITIES",
        payload: await activities_(),
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};

export const countryDetail = (countryName) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "COUNTRY_DETAILS",
        payload: await details(countryName)
      })
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
}


export const sort = (payload) => {
  return { type: "SORT", payload }
}

export const findCountry = (word) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FIND_COUNTRY",
        payload: await find(word)
      })
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
}


export const findCountriesContinent = (cont) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FIND_COUNTRIES_CONTINENT",
        payload: await continent(cont)
      })
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
}
export const nextCountry = (countryName) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "NEXT_COUNTRY",
        payload: countryName
      })
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }
}

export const setError = () => {
  return { type: "SET_ERROR", payload: {} }
}

export const setMsg = () => {
  return { type: "SET_MSG", payload: "" }
}

export const word = (payload) => {
  return { type: "WORD", payload }
}

export const filterActivities = (name) => {
  return {
    type: "FILTER_ACTIVITIES",
    payload: name,
  }
}

export const activityCountry = (countryName) =>{
  return async function (dispatch) {
    try {
      dispatch({
        type:"ACTIVITY_COUNTRY",
        payload: await findActivity(countryName)
      })
    } catch (error){
    dispatch({
      type:"ERROR",
      payload: error.message
    })
  }}
}