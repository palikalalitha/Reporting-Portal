import React, { Component } from 'react';
import { observer } from "mobx-react";
import i18n from "../../i18n/strings.json"
import { observable } from "mobx";
import { NoObservationsText ,NoObservationContainer} from "../../styleGuide/typos";

import {Button} from "../../../common/components/Button/"
import { ADD_NEW } from "../../../common/constants/reportingPortalconstants";
import { withRouter } from "react-router-dom";
@observer
class NoObservations extends Component {
//     renderUserFormCreation=()=>
//     {
//         alert(1)
// this.props.history.replace("/reporting-protal/user-form-creation/")
//     }
    render() {
        const {noObservations}=i18n
        const {gotUserForm}=this.props
      return(
            <NoObservationContainer>
            <NoObservationsText>{noObservations}
            </NoObservationsText>
            <Button buttonText={ADD_NEW} onClickHandler={gotUserForm}/>
            </NoObservationContainer>
        );
    }
}

export default withRouter(NoObservations)
