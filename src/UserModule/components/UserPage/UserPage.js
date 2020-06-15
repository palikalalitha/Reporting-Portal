import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Header } from '../../../common/components/Header/Header'
import { ReportedPortalContainer } from '../../styleGuide/typos'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { HEADING } from '../../../common/constants/ReportingPortalconstants'
import Navbar from '../../../common/components/Navbar/Navbar'
import { ObservationContainer } from '../../styleGuide/typos'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'

@observer
class UserPage extends React.Component {
   render() {
      const {
         doNetworkCalls,
         apiStatus,
         apiError,
         renderSuccessUI,
         categories
      } = this.props
      return (
         <DesktopLayout {...this.props}>
            <Navbar {...this.props}/>
           
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
