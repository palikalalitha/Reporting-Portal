import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Header } from '../../../common/components/Header/Header'
import { ReportedPortalContainer } from '../../styleGuide/typos'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { HEADING } from '../../../common/constants/ReportingPortalconstants'
import Navbar from '../../../common/components/Navbar/Navbar'
import { ObservationContainer } from '../../styleGuide/typos'
import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout"

@observer
class UserPage extends React.Component {
   render() {
      const {
         doNetworkCalls,
         apiStatus,
         apiError,
         gotoUserForm,
         renderSuccessUI,
         observationList,
         roleType

      } = this.props
      return (
         <DesktopLayout>
            <Navbar {...this.props}/>
            <LoadingWrapperWithFailure
               apiStatus={apiStatus}
               apiError={apiError}
               renderSuccessUI={renderSuccessUI}
               onRetryClick={doNetworkCalls}
            />
         </DesktopLayout>

         // <ReportedPortalContainer>
         //    <Header />
         //    {observationList.length > 0 && (
         //       <Navbar heading={HEADING} {...this.props} />
         //    )}

         //    <LoadingWrapperWithFailure
         //       apiStatus={apiStatus}
         //       apiError={apiError}
         //       renderSuccessUI={renderSuccessUI}
         //       onRetryClick={doNetworkCalls}
         //    />
         // </ReportedPortalContainer>
      )
   }
}

export { UserPage }
