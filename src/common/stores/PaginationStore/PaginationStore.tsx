import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { PAGE_LIMIT } from '../../../UserModule/constants/userStoreConstants'
import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
import { UserModel } from "../../../UserModule/stores/models/UserModel"
import { RPModel } from "../../../RPModule/stores/Models/RPModel"

class PaginationStore {
   @observable selectedPage!:number
   @observable totalPages!:number
   @observable getEntityListAPIError!:Error|null
   @observable getEntityListAPIStatus!:APIStatus
   @observable entityList!:Array<RPModel>|Array<UserModel>
   entityModel
   serviceMethod
   pageLimit:number
   offset:number
   constructor(method, limit, offset, entityModel) {
      this.serviceMethod = method
      this.pageLimit = limit
      this.offset = offset
      this.entityModel = entityModel
      this.init()
   }
   init() {
      this.selectedPage = 0
      this.totalPages = 0
      this.entityList = []
      this.getEntityListAPIError = null
      this.getEntityListAPIStatus = API_INITIAL
   }
   @action.bound
   updatePage(page) {
      this.selectedPage = page
      this.offset = Math.ceil(page * this.pageLimit)
   }
   @action.bound
   getEntitesList(requestObject) {
      const userPromise = this.serviceMethod(this.offset,this.pageLimit,requestObject)
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetEntityListAPIStatus, this.setEntityListResponse)
         .catch(this.setGetEntityListAPIError)

         //below code using backend api response
         //   this.observationList = response['total_list'].map(eachObservation => {
         //          return new UserModel(eachObservation)
         //       })

         //       this.totlaPages = Math.ceil(response['count'] / this.pageLimit)
      
   }
   @action.bound
   setEntityListResponse(response) {
      this.entityList = response.result.map(each => {
         return new this.entityModel(each)
      })
      this.totalPages = Math.ceil(response.totalCount / this.pageLimit)
   }

   @action.bound
   setGetEntityListAPIError(error) {
      this.getEntityListAPIError = error
   }

   @action.bound
   setGetEntityListAPIStatus(status) {
      this.getEntityListAPIStatus = status
   }
}

export { PaginationStore }

// Class PaginatioStore
// {
// Limit:number
// Offset:number
// Selectpage:number
// entitiesMap:Map<numeer,array>//1:{items1,item2,item3}
// enitiesAPIStatus
// enititesAPIError

// enitityModel
// @computed
// get currenttmes()
// {
// Return this.entitiesMap.get(this.selectedPage)
// }
// getEntities()
// {
// const entityInstances =data.map(eachdata)=>
// {return new this.enitityModel(eachdata
// }
// }

// Class DashbordStore
// {
// paginatonStore:<PaginationStore>
// constructor()
// {
// this,paginatoStore=new PaginationStore(service,limit,offset,model)
// }
