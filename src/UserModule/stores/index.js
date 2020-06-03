import { UserStore } from './UserStore'
import UserService from '../services/UserService/UserService.fixture'
import { UserServiceAPI } from '../services/UserService/UserService.api'

const userServiceFixture = new UserService()

const userServiceAPI = new UserServiceAPI()
const userStore = new UserStore(userServiceFixture)

export { userStore, userServiceFixture, userServiceAPI }
