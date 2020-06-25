export interface signInRequest
{
        user_name:string,
        password: string
}
export interface signInResponse
{
        access_token: string
        role: string
}

export interface signOutRequest
{
    access_token: string 
}