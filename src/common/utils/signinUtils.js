import { getAccessToken } from "./StorageUtils.js"
export const isLoggedIn = () => {
    const token = getAccessToken()
    return token
}
