import Cookie from 'js-cookie'

let mockSetCookie = jest.fn()
let mockGetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.get = mockGetCookie
Cookie.remove = mockRemoveCookie
describe('StorageUtils  Tests', () => {
   // it("should test the access token ",()=>
   // {
   //     const ACCESS_TOKEN="hfd"
   //     expect(ACCESS_TOKEN).toBeDefined()
   // })
   it('should test the getCookie function ', () => {})
})
