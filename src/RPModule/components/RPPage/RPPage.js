import React, { Component } from 'react'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'
import Table from '../../../common/components/Table/Table'
import { ObservationList } from '../../../UserModule/components/ObservationList/ObservationList'
import { HEADING } from '../../constants/RPPageConstants'
import Navbar from '../../../common/components/Navbar/Navbar'
import { RpContainer, NavabarHeading } from './styledComponents'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'

class RPPage extends Component {
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
            <Navbar roleType={roleType} heading={HEADING} {...this.props} />
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
