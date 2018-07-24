import * as Types from '../types'

const INITIAL_STATE = {
  fetching: false,
  error: null,
  response: null,
  payload: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case Types.REGISTER_REQUEST:
    return {
      ...state,
      fetching: true,
      error: null,
      response: null,
      payload: action.payload
    }

  case Types.REGISTER_SUCCESS:
    return {
      ...state,
      fetching: false,
      error: null,
      response: action.payload,
      payload: null
    }

  case Types.REGISTER_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload,
      response: null,
      payload: null
    }

  default:
    return state
  }
}
