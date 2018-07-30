
import { productsFailure, productsSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
export function* products (api,action) {
  const payload = action.payload  ;
  console.log('products>>>',payload);
  const response = yield call(api.listProducts, payload)
  if (response.ok) {
    console.log('products>>>',response.data.length);
    yield put(productsSuccess(response.data))
  } else {
    yield put(productsFailure(response.data))
  }
}