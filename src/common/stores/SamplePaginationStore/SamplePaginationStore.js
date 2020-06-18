import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";

class SamplePaginationStore {
   @observable paginationService;
   @observable itemModel;
   @observable itemsLimit;
   @observable totalItems;
   @observable currentPage;
   @observable items;
   @observable itemsAPIError;
   @observable itemsAPIStatus;

    constructor(service,model,totalItems,itemsLimit){
        this.inIt();
        this.paginationService = service;
        this.itemModel = model;
        this.totalItems = totalItems;
        this.itemsLimit = itemsLimit;
    }

    @action.bound
    inIt(){
        this.paginationService = {};
        this.itemModel = {};
        this.totalItems = 0;
        this.itemsLimit = 0;
        this.currentPage = 1;
        this.itemsOffset = 0;
        this.items =  new Map();
        this.itemsAPIError = null;
        this.itemsAPIStatus = API_INITIAL;
        this.startPage =1;
    }
    @action.bound
    getItems(){
       const itemsAPIPromise =  this.paginationService.getProductsAPI(this.itemsOffset,this.itemsLimit);
       return bindPromiseWithOnSuccess(itemsAPIPromise)
       .to(this.setItemsAPIStatus,this.setItemsAPIResponse)
       .catch(this.setItemsAPIError)
    }

    @action.bound
    setItemsAPIResponse(response){
        this.itemsAPIResponse.set(this.currentPage,response.map(item=>{
            new this.itemModel(this.paginationService,item);
        }));
    }
    @action.bound
    setItemsAPIStatus(status){
        this.itemsAPIStatus = status;
    }
    @action.bound
    setItemsAPIError(error){
        this.itemsAPIError = error;
    }
    @action.bound
    setItemsOffset(value){ 
            switch(value){
                case "increment":{
                    this.itemsOffset+=this.itemsLimit;
                    this.currentPage++;
                    break;
                }
                case "decrement":{
                    this.itemsOffset-=this.itemsLimit;
                    this.currentPage--;
                    
                    break;
                }
                default:{
                    break;
                }
            }
        
    }
    @action.bound
    navigateNextPage(){
        if(this.currentPage<(this.totalItems/this.itemsLimit)) {
            this.setItemsOffset("increment");
        }
    }
    @action.bound
    navigatePreviousPage(){
         
        if(this.currentPage>this.startPage){
            this.setItemsOffset("decrement");
        }
        
    }
    
}
export {SamplePaginationStore}