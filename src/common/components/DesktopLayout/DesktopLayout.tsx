import React, { Component } from 'react'
import Header from '../Header/Header'
import { DesktopLayoutContainer } from './styledComponents'
import Navbar from '../Navbar/Navbar'
import { ReportedPortalContainer } from '../../../UserModule/styleGuide/typos'

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
