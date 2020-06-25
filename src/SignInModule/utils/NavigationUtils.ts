import { USER_PATH } from '../../UserModule/constants/RouteConstants'
// import { RP_PATH } from '../../RPModule/constants/RPRouteConstants/RPRouteConstants'

export const gotoUserPage = (history, role) => {
   history.replace(USER_PATH, role)
}
export const gotoRPPage = (history, role) => {
   // console.log(history, role)
   // history.replace(RP_PATH, role)
}

// goToSpecificProjectsWithSelectedScreen(projectId,screenId){
// history.push(`/home/projects/${projectId}/screen/${screenId}`)

// }
//  goToSpecificProjectsWithSelectedScreen(projectId,screnId)
// {
// history.push(`/home/projects/${projectId}/${query}`)
// }
