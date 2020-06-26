
import UserService from '../services/UserService/UserService.fixture'
import { UserServiceAPI } from '../services/UserService/UserService.api'
import { UserStore } from "./userStore"

const userServiceFixture = new UserService()

const userServiceAPI = new UserServiceAPI()

const userStore = new UserStore(userServiceFixture)

export { userStore, userServiceFixture, userServiceAPI }
