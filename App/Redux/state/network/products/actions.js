import * as Types from '../types'
export const productsInitial = payload => ({
  type: Types.PRODUCTS_INITIAL,
  payload
})
export const productsRequest = payload => ({
  type: Types.PRODUCTS_REQUEST,
  payload
})

export const productsSuccess = payload => ({
  type: Types.PRODUCTS_SUCCESS,
  payload
})

export const productsFailure = payload => ({
  type: Types.PRODUCTS_FAILURE,
  payload
})