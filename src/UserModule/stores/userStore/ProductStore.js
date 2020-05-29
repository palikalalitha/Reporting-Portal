import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import getProductsResponse from "../../fixtures/getProductsResponse.json";

import ProductService from "../../services/ProductService/ProductServiceAPI.js"
import ProductStore from "."


describe("Product store test", () => {
    let productService
    let productStore
    beforeEach(() => {
        productService = new ProductService
        productStore = new ProductStore(productService)
    })

    it("should test product store initialising state", () => {
        expect(productStore.productList).toStrictEqual(new Array)
        expect(productStore.sizeFilter).toStrictEqual(new Array)
        expect(productStore.sortBy).toBe("select")
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
    });\

    it("should test product store fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        productService.getProductsAPI = mockSignInAPI;

        productStore.getProductList()
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING)
    })

    it("should test product store success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        productService.getProductsAPI = mockSignInAPI;

        await productStore.getProductList()
        expect(productStore.productList.length).toBe(16)
        
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS)
    })

    it("should test product store failure state", async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });

        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        productService.getProductsAPI = mockSignInAPI;

        await productStore.getProductList()
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED)
        expect(productStore.getProductListAPIError).toBe("error");

    })

    it("should test sizes filter function", () => {
        productStore.onSelectSize("XS");
        expect(productStore.sizeFilter).toStrictEqual(["XS"]);
        productStore.onSelectSize("S");
        expect(productStore.sizeFilter).toStrictEqual(["XS", "S"]);
        productStore.onSelectSize("S");
        expect(productStore.sizeFilter).toStrictEqual(["XS"])

    });
    // it("should test sort function", () => {
    //     const fixtureProducts=getProductsResponse
    //     const inputs=[fixtureProducts[1],fixtureProducts[2],fixtureProducts[3]] 
    //     productStore.setProductListResponse(inputs)
    //     const ouputProducts=[fixtureProducts[2],fixtureProducts[3],fixtureProducts[1]]
    //     productStore.onChangeSortBy("ASCENDING");
    //     expect(productStore.sortBy).toStrictEqual("ASCENDING");
    //     expect(productStore.products).toStrictEqual(ouputProducts)


    //  })
    it("should test filtering products", async() => {
        productStore.productList = getProductsResponse;
        expect(productStore.products).toStrictEqual(getProductsResponse)
        productStore.onSelectSize("S");
        productStore.onSelectSize("XS");
        productStore.onChangeSortBy("DESCENDING");
        expect(productStore.totalNoOfProductsDisplayed).toStrictEqual(5)
        
        productStore.sortBy = "ASCENDING";
        expect(productStore.totalNoOfProductsDisplayed).toStrictEqual(5)
    })
})
