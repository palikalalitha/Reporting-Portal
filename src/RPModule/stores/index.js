import { RPStore } from './RPStore'
import RPServiceFixture from '../services/RPService/RPService.fixture'
import { RPServiceAPI } from '../services/RPService/RPService.api'
import UserService from '../../UserModule/services/UserService/UserService.fixture'

import { UserServiceAPI } from '../../UserModule/services/UserService/UserService.api'
const userServiceFixture = new UserService()

const userServiceAPI = new UserServiceAPI()
const rpServiceFixture = new RPServiceFixture()

const rpServiceapi = new RPServiceAPI()
const rpStore = new RPStore(rpServiceFixture, userServiceAPI)

export { rpStore, rpServiceapi, rpServiceFixture }
