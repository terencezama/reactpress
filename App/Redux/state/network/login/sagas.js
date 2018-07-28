
import { loginFailure, loginSuccess } from './actions'
import { call, put } from 'redux-saga/effects'
import {AsyncStorage} from 'react-native'
export function* login (api,action) {
  const payload = action.payload  
  const response = yield call(api.login, payload)

  
  if (response.ok) {
    yield put(loginSuccess(response.data))
    AsyncStorage.setItem('network:login',JSON.stringify(response.data));
  } else {
    let error = response.data;
    if (error == null){
      error = {code:'error_network'}
    }
    yield put(loginFailure(error))
  }
}