
import { productsFailure, productsSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
export function* products (api,action) {
  const payload = action.payload  
  const response = yield call(api.products, payload)
  
  if (response.ok) {
    yield put(productsSuccess(response.data))
  } else {
    yield put(productsFailure(response.data))
  }
}