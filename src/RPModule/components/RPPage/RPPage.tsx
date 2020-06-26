import React, { Component } from 'react'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'
import { ObservationList } from '../../../UserModule/components/ObservationList/ObservationList'
import { HEADING } from '../../constants/RPPageConstants'
import Navbar from '../../../common/components/Navbar/Navbar'
import { RpContainer, NavabarHeading } from './styledComponents'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { APIStatus } from "@ib/api-constants"


interface RPPageProps 
{
   doNetworkCalls:()=>void
   apiStatus:APIStatus
   apiError:Error|null
   renderSuccessUI:()=>void
   roleType:string
}
class RPPage extends Component <RPPageProps>{
   render() {
      const {
         doNetworkCalls,
         apiStatus,
         apiError,
         renderSuccessUI,
         roleType
      } = this.props
      return (
         <DesktopLayout roleType={roleType}>
            <Navbar roleType={roleType} />
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

export { RPPage }
