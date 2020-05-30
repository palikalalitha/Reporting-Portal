import React, { Component } from 'react';
import { Header } from "../Header/Header";
import { DesktopLayoutContainer } from "./styledComponents"  
import Navbar from "../Navbar/Navbar";
import {HEADING} from "../../constants/reportingPortalconstants"
import { ReportedPortalContainer } from "../../../UserModule/styleGuide/typos";

class DesktopLayout extends Component {
    render() {
        const {children:Children,observationList}=this.props
        return (
            <Children {...this.props} observationList={observationList}/>
              );
    }
}

export { DesktopLayout};