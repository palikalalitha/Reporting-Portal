
import { observable, action, computed } from "mobx"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import {UserModel} from "../models/UserModel"
import observationList from "../../fixtures/getObservationList"

class UserStore  {
    @observable observationList;
    @observable getObservationListAPIStatus;
    @observable getObservationListAPIError;
    userService
    constructor(userServiceResponse) {
        this.userService=userServiceResponse
        this.init()
    }
    init() {
        this.getObservationListAPIStatus = API_INITIAL
        this.getObservationListAPIError = null
        this.observationList =[]
    }
    @action.bound
    onAddObservationList(observationTitle,observationSeverity,observationDesc)
    {
        let observationObj=
        {
            title:observationTitle,
            priority:observationSeverity,
            description:observationDesc

        }
        const observationModel=new UserModel(observationObj)
        this.observationList.push(observationModel)
    }
    @action.bound
    getObservationList() {
        console.log(this.userService)
        const userPromise = this.userService.getUsersResponse()
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetObservationListAPIStatus, this.setObservationListResponse)
            .catch(this.setGetObservationListAPIError) 
    }

    @action.bound
    setObservationListResponse(response) {       
        this.observationList = response.map(eachObservation => { 
            return new UserModel(eachObservation) }) 
        }
    @action.bound
    setGetObservationListAPIError(error) {
        this.getObservationListAPIError = error
    }

    @action.bound
    setGetObservationListAPIStatus(status) {
        this.getObservationListAPIStatus = status
    }
    @computed
    get userObservationList() {
        return this.observationList
    }
    @computed get totalObservations()
    {
        return this.observationList.length
    }
}
export { UserStore};