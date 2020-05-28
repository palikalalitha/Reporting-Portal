import React, { Component } from 'react';
import { Header } from "../Header/Header";
import { DesktopLayoutContainer } from "./styledComponents"  
import Navbar from "../Navbar/Navbar";
import {HEADING} from "../../constants/reportingPortalconstants"
class DesktopLayout extends Component {
    render() {
        const {type,children:Children,gotoUserForm,observationList}=this.props
        return (
                    <Children {...this.props} observationList={observationList}/>
        );
    }
}

export { DesktopLayout};