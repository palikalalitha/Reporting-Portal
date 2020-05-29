import React, { Component } from 'react';
import { observer } from "mobx-react";

import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout"
import { Header } from "../../../common/components/Header/Header";
import {ReportedPortalContainer} from "../../styleGuide/typos"

@observer
class UserPage extends Component {
    render() {
            const {observationList,component:Component}=this.props
        return (
            <ReportedPortalContainer>
                  <Header/>
                    <DesktopLayout children={Component}
                                {...this.props} observationList={observationList}/> 
            </ReportedPortalContainer>

        );
    }
} 

export { UserPage };