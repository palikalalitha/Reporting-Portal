
import {UserStore} from "./userStore/"
import UserService from "../services/UserService/UserService.fixture"

const userService=new UserService()
const userStore = new UserStore(userService)

export
{userStore,
    userService
}
