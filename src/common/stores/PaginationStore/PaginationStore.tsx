import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import { PAGE_LIMIT } from '../../../UserModule/constants/userStoreConstants'
import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

class PaginationStore {
   @observable selectedPage
   @observable totalPages
   @observable getEntityListAPIError
   @observable getEntityListAPIStatus
   @observable entityList
   entityModel
   serviceMethod
   pageLimit
   offset
   constructor(method, limit, offset, entityModel) {
      this.serviceMethod = method
      this.pageLimit = limit
      this.offset = offset
      this.entityModel = entityModel
      this.init()
   }
   init() {
      this.selectedPage = 0
      this.totalPages = ''
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
   getEntitesList() {
      const userPromise = this.serviceMethod(this.offset, this.pageLimit)
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setGetEntityListAPIStatus, this.setEntityListResponse)
         .catch(this.setGetEntityListAPIError)
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
