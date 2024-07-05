const defaultState = {
  token: "",
  id: "",
  auth: "",
  title: "",
  text: ""
}


const SET_POST = "SET_POST"
const RESET_POST = "RESET_POST"

export const postReducer = (state = defaultState, action) => {
  const payload = action.payload

  switch (action.type) {
    case SET_POST:
      return {
        token: payload.token,
        id: payload.id,
        auth: payload.auth,
        title: payload.title,
        text: payload.text,
      }
    case RESET_POST:
      return defaultState
    default:
      return state
  }
}

export const setPostAction = (payload) => ({type: SET_POST, payload})
export const resetPostAction = (payload) => ({type: RESET_POST, payload})