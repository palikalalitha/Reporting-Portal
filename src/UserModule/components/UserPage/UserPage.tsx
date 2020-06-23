import React, { Component } from 'react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import Navbar from '../../../common/components/Navbar/Navbar'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'


interface UserPageProps{
   doNetworkCalls:()=>void
   apiStatus:number
   apiError:any
   renderSuccessUI:any
   roleType:string
   onClickToSignOut:()=>void
   gotoUserForm:()=>void

}
@observer
class UserPage extends React.Component<UserPageProps> {
   render() {
      const {
         doNetworkCalls,
         apiStatus,
         apiError,
         renderSuccessUI,
      } = this.props

      return (
         <DesktopLayout {...this.props}>
            <Navbar {...this.props} />
            <LoadingWrapperWithFailure
               apiStatus={apiStatus}
               apiError={apiError}
               renderSuccessUI={renderSuccessUI}
               onRetryClick={doNetworkCalls}
            />
         </DesktopLayout>
      )
   }
}

export { UserPage }
