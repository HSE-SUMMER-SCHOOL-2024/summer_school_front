const defaultState = {
  token: "",
  id: "",
  auth: "",
  title: "",
  text: "",
  searchString: '',
}


const SET_POST = "SET_POST"
const RESET_POST = "RESET_POST"
const SET_SEARCH_STRING = "SET_SEARCH_STRING"

export const postReducer = (state = defaultState, action) => {
  const payload = action.payload
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        token: payload.token,
        id: payload.id,
        auth: payload.auth,
        title: payload.title,
        text: payload.text,
      }
    case RESET_POST:
      return defaultState
    case SET_SEARCH_STRING:
      return { ...state,
        searchString: payload,
      }
    default:
      return state
  }
}

export const setPostAction = (payload) => ({type: SET_POST, payload})
export const resetPostAction = (payload) => ({type: RESET_POST, payload})
export const setSearchStringAction = (payload) => ({type: SET_SEARCH_STRING, payload})