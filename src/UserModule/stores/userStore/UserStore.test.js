import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "./node_modules/@ib/api-constants";

import observationList from "../../fixtures/getObservationList"
import UserService from "../../services/UserService/UserService.fixture";
import {UserStore} from "./index"
describe("user store test", () => {
    let userService
    let userStore
    beforeEach(() => {
        userService = new UserService()
        userStore = new UserStore(userService)
    })

    it("should test user store initialising state", () => {
        expect(userStore.observationList).toStrictEqual(new Array)
        expect(userStore.getObservationListAPIStatus).toBe(API_INITIAL);
        expect(userStore.getObservationListAPIError).toBe(null);

    });
    it("should test user store data fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        userService.getUsersResponse = mockSignInAPI;

        userStore.getObservationList()
        expect(userStore.getObservationListAPIStatus).toBe(API_FETCHING)
    })

    it("should test user store success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(observationList);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        userService.getUsersResponse= mockSignInAPI;

        await userStore.getObservationList()
        expect(userStore.observationList.length).toBe(3)
        expect(userStore.getObservationListAPIStatus).toBe(API_SUCCESS)
    });

    it("should test user store failure state", async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });

        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        userService.getUsersResponse= mockSignInAPI;


        await userStore.getObservationList()
        expect(userStore.getObservationListAPIStatus).toBe(API_FAILED)
        expect(userStore.getObservationListAPIError).toBe("error");

    })


});

