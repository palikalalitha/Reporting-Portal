import React, { Component } from 'react';
import { observer } from "mobx-react";

import { Header } from "../../../common/components/Header/Header";
import {ReportedPortalContainer} from "../../styleGuide/typos"
import LoadingWrapperWithFailure from "../../../common/components/LoadingWrapperWithFailure";
import { HEADING } from "../../../common/constants/reportingPortalconstants";
import Navbar from "../../../common/components/Navbar/Navbar"


@observer
class UserPage extends Component {
    render() {
            const {doNetworkCalls,apiStatus,apiError,renderSuccessUI,observationList}=this.props
            return (
            <ReportedPortalContainer>
                <Header/> 
                {observationList.length>0 &&
                    <Navbar heading={HEADING} {...this.props} />}
                    <LoadingWrapperWithFailure        
                        apiStatus={apiStatus}
                        apiError={apiError}
                        renderSuccessUI={renderSuccessUI}
                        onRetryClick={doNetworkCalls}
                        />
            </ReportedPortalContainer>
        );
    }
} 

export { UserPage };