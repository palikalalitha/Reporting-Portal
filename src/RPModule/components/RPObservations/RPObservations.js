import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { ObservationList } from "../../../UserModule/components/ObservationList/ObservationList";
import { DesktopLayout } from "../../../common/components/DesktopLayout/DesktopLayout";
import Navbar from "../../../common/components/Navbar/Navbar"
import {HEADING} from "../../constants/RPPageConstants"
import { RP_CREATION_FORM, OBSERVATION_SCREEN } from "../../constants/RPRouteConstants/RPRouteConstants";

class RPObservations extends Component {
    gotoUserForm=()=>
    {
        this.props.history.push(RP_CREATION_FORM)
    }
    
    navigateToObservationScreen=()=>
    {
        console.log("in rp")
        this.props.history.push(OBSERVATION_SCREEN)

    }
    static defaultProps={
        observationList:[{
           "id": "1",
           "title": "Learning deviations",
           "priority": "HIGH",
           "description": "It is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, or may also be sent via an Internet connection",
           "category": "category 1",
           "sub_category": "sub_category 1",
           "due_date": "11/5/2020",
           "status": "Action in progress",
           "assigned_to": {
             "name": "lalitha",
             "phno": 913456788
           }
        }]
     }
    
    render() {
        return (
            <DesktopLayout  roleType="rp">
                  <Navbar roleType="user"
                   heading={HEADING} navigateToObservationScreen={this.navigateToObservationScreen} gotoUserForm={this.gotoUserForm} {...this.props}/>
            <ObservationList isRoleType="rp"
            {...this.props} navigateToObservationScreen={this.navigateToObservationScreen} 
            gotoUserForm={this.gotoUserForm}/>
            </DesktopLayout>
        );
    }
}

export default withRouter(RPObservations);