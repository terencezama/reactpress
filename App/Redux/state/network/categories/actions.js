import * as Types from '../types'
export const categoriesInitial = payload => ({
  type: Types.CATEGORIES_INITIAL,
  payload
})
export const categoriesRequest = payload => ({
  type: Types.CATEGORIES_REQUEST,
  payload
})

export const categoriesSuccess = payload => ({
  type: Types.CATEGORIES_SUCCESS,
  payload
})

export const categoriesFailure = payload => ({
  type: Types.CATEGORIES_FAILURE,
  payload
})