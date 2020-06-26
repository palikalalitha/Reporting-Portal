import React, { Component } from 'react'
import { ReportedPortalContainer } from '../../../UserModule/styleGuide/typos'
import Header from '../Header/Header'


interface DesktopLayoutProps
{
   roleType?:string|any
}
class DesktopLayout extends Component<DesktopLayoutProps> {
   render() {
      const { children,roleType} = this.props
      return (
         <ReportedPortalContainer>
            <Header roleType={roleType} {...this.props} />
            {children}
            {/* <Children {...this.props} observationList={observationList} /> */}
         </ReportedPortalContainer>
      )
   }
}

export { DesktopLayout }
