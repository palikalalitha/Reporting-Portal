import React, { Component } from 'react';
import { observable, action, computed } from "mobx"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise"
import { API_INITIAL } from "@ib/api-constants"
import {UserModel} from "../models/UserModel"
class UserStore  {
    @observable observationList;
    @observable getObservationListAPIStatus;
    @observable getObservationListAPIError;
    constructor() {
       
        this.init()
            }
    init() {
        this.getObservationListAPIStatus = API_INITIAL
        this.getObservationListAPIError = null
        this.observationList = []
    }
    @action.bound
    onAddObservationList(observationTitle,observationCategory)
    {
        let observationObj=
        {
            title:observationTitle,
            category:observationCategory
        }
        const observationModel=new UserModel(observationObj)
       
        this.observationList.push(observationModel)
        console.log(this.observationList)
    }
    @action.bound
    gotoObservationPage()
    {
        alert(1)
    }









    // @action.bound
    // getObservationList() {
    //      const userResponse=""
    //     //const userResponse = this.productsAPIService.getProductsAPI(this.pageLimit,this.offset)
    //     return bindPromiseWithOnSuccess(userResponse)
    //         .to(this.setGetObservationListAPIStatus, this.setObservationListResponse)
    //         .catch(this.setGetObservationListAPIError)
    // }

    // @action.bound
    // setObservationListResponse(response) {
       
    //     this.ObservationList = response.observations.map(eachObservation => { 
    //         return new Observation(eachProduct) })
           
           
    // }
    // @action.bound
    // setGetObservationListAPIError(error) {
    //     this.getObservationListAPIError = error
    // }

    // @action.bound
    // setGetObservationListAPIStatus(status) {
    //     this.getObservationListAPIStatus = status
    // }
}
const userStore=new UserStore()
export { userStore};