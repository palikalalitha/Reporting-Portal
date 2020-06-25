import React, { Component } from 'react'
import { ReportedPortalContainer } from '../../../UserModule/styleGuide/typos'
import Header from '../Header/Header'

class DesktopLayout extends Component {
   render() {
      const { children } = this.props
      return (
         <ReportedPortalContainer>
            <Header {...this.props} />
            {children}
            {/* <Children {...this.props} observationList={observationList} /> */}
         </ReportedPortalContainer>
      )
   }
}

export { DesktopLayout }
