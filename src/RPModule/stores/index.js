import { RPStore } from './RPStore'
import RPServiceFixture from "../services/RPService/RPService.fixture"
import { RPServiceAPI } from "../services/RPService/RPService.api"
import UserService from "../../UserModule/services/UserService/UserService.fixture"

const userServiceFixture=new UserService();

const rpServiceFixture = new RPServiceFixture()

const rpServiceapi = new RPServiceAPI()
const rpStore = new RPStore(rpServiceFixture,userServiceFixture)

export { rpStore, rpServiceapi, rpServiceFixture }
