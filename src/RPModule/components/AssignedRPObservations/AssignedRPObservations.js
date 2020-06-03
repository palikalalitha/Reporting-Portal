import React, { Component } from 'react';
import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout";
import Table from "../../../common/components/Table/Table";
import { ObservationList } from "../../../UserModule/components/ObservationList/ObservationList";
import {HEADING} from "../../constants/RPPageConstants"
import Navbar from "../../../common/components/Navbar/Navbar"
import {RpContainer,NavabarHeading} from "./styledComponents"
import LoadingWrapperWithFailure from "../../../common/components/LoadingWrapperWithFailure";

class AssignedRPObservations extends Component {
    render() {
        const {
            doNetworkCalls,
            apiStatus,
            apiError,
            renderSuccessUI,
         } = this.props
        return (
            <DesktopLayout roleType="rp">
                <Navbar roleType="rp" heading={HEADING} {...this.props}/>
                <LoadingWrapperWithFailure
               apiStatus={apiStatus}
               apiError={apiError}
               renderSuccessUI={renderSuccessUI}
               onRetryClick={doNetworkCalls}/>
            </DesktopLayout>);
    }
}

export  {AssignedRPObservations};