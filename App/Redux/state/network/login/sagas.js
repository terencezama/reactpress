
import { loginFailure, loginSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
export function* login (api,action) {
  const payload = action.payload  
  const response = yield call(api.login, payload)
  
  if (response.ok) {
    console.log(response.data)
    yield put(loginSuccess(response.data))
  } else {
    yield put(loginFailure())
  }
}