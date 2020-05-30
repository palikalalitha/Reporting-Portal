import { observable, action, computed } from "mobx"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"

import observationList from "../../fixtures/getObservationList"
import {UserModel} from "../models/UserModel"


class UserStore  {

    @observable observationList;
    @observable getObservationListAPIStatus;
    @observable getObservationListAPIError;   
    @observable currentPage
    @observable totlaPages
    userService
    pageLimit=PAGE_LIMIT
    offset

    constructor(userServiceResponse) {
        this.userService=userServiceResponse
        this.init()
    }
    init() {
        this.getObservationListAPIStatus = API_INITIAL
        this.getObservationListAPIError = null
        this.observationList =[]
        this.currentPage=CURRENT_PAGE
        this.totlaPages=""
        this.offset=OFFSET

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
       
        const userPromise = this.userService.getUsersResponse()
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetObservationListAPIStatus, this.setObservationListResponse)
            .catch(this.setGetObservationListAPIError) 
    }

    @action.bound
    setObservationListResponse(response) {
        const {offset,pageLimit}=this
        let list=response
        let updatedList=list.slice(offset,offset+pageLimit)
        this.observationList = updatedList.map(eachObservation => {return new UserModel(eachObservation) }) 
        this.totlaPages=Math.ceil(response.length/pageLimit)
        }
    @action.bound
    setGetObservationListAPIError(error) {
        this.getObservationListAPIError = error
    }

    @action.bound
    setGetObservationListAPIStatus(status) {
        this.getObservationListAPIStatus = status
    }

    @action.bound
    navigateNextPage()
    {
       
        if(this.currentPage<this.totlaPages)
        {
            this.currentPage++;
            this.offset+=this.pageLimit
            this.getObservationList();
        }
    }
    @action.bound
    navigatePrevPage()
    {
        if(this.currentPage>1)
        {

        this.currentPage--;
        this.offset-=this.pageLimit
        this.getObservationList();
        }
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