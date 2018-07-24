
import { registerFailure, registerSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
export function* register (api,action) {
  const payload = action.payload  
  const response = yield call(api.register, payload)
  if (response.ok) {
    yield put(registerSuccess(response.data))
  } else {
    yield put(registerFailure(response.data))
  }
}