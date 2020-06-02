import React, { Component } from 'react';
import { NavabarHeading ,NavabarContainer} from "./styledComponents";
import {Button} from "../Button/"
import {ADD_NEW} from "../../constants/ReportingPortalconstants"

class Navbar extends Component {
    render() {
        const {heading,gotoUserForm}=this.props
           return (
            <NavabarContainer>
                <NavabarHeading>{heading}</NavabarHeading>
                <Button buttonText={ADD_NEW} onClickHandler={gotoUserForm}/>
            </NavabarContainer>
        );
    }
}

export default Navbar;