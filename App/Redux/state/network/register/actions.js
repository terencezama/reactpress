import * as Types from '../types'

export const registerRequest = payload => ({
  type: Types.REGISTER_REQUEST,
  payload
})

export const registerSuccess = payload => ({
  type: Types.REGISTER_SUCCESS,
  payload
})

export const registerFailure = payload => ({
  type: Types.REGISTER_FAILURE,
  payload
})