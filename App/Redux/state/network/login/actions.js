import * as Types from '../types'
export const loginInitial = payload => ({
  type: Types.LOGIN_INITIAL,
  payload
})

export const loginRequest = payload => ({
  type: Types.LOGIN_REQUEST,
  payload
})

export const loginSuccess = payload => ({
  type: Types.LOGIN_SUCCESS,
  payload
})

export const loginFailure = payload => ({
  type: Types.LOGIN_FAILURE,
  payload
})