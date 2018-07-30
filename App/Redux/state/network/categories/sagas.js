
import { categoriesFailure, categoriesSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
export function* categories (api,action) {
  const payload = action.payload  
  const response = yield call(api.listProductCategories, payload)
  
  if (response.ok) {
    yield put(categoriesSuccess(response.data))
  } else {
    yield put(categoriesFailure(response.data))
  }
}