import React, { Component } from 'react';
import { observer } from "mobx-react";

import {UserForm} from "../UserForm/UserForm"
import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout"
import { Header } from "../../../common/components/Header/Header";
//import LoadingWrapperWithFailure from "../../../common/components/LoadingWrapperWithFailure";
import {ReportedPortalContainer} from "../../styleGuide/typos"

import {ObservationList} from "../../components/UserObservationList/ObservationList"

@observer
class UserPage extends Component {
    render() {
            const {apiStatus,apiError,renderSuccessUI,observationList,gotoObservationList,component:Component,gotoUserForm}=this.props
        return (
            <ReportedPortalContainer>
                  <Header/>
                    <DesktopLayout children={Component} gotoObservationList={gotoObservationList} gotoUserForm={gotoUserForm} observationList={observationList}/>
                {/* <ObservationList observationList={observationList}/> */}
                {/* <LoadingWrapperWithFailure apiStatus={apiStatus}
                            apiError={apiError} onRetryClick={doNetworkCalls}
                            renderSuccessUI={renderSuccessUI}/> */}
            </ReportedPortalContainer>

        );
    }
} 

export { UserPage };