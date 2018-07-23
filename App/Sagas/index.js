import { takeLatest, all } from 'redux-saga/effects'
import WPApi from '../Services/WPApi'
import {
  LOGIN_REQUEST
} from '../Redux/state/network/types'
import { login} from '../Redux/state/network/login/sagas'


/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */

// import { startup } from './StartupSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const wpApi = WPApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)

    takeLatest(LOGIN_REQUEST,login,wpApi)
  ])
}
