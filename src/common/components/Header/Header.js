import React, { Component } from 'react';
import {Image} from "../Image/"
import {LOGO,RP,LOGO_IMAGEURL,PROFILE_URL} from "../../constants/ReportingPortalconstants"
import {Heading,Container,HeaderLeftPart,HeaderRightPart,ProfileName,HeaderMiddlePart,ObservationsTab,AssignedTab} from "./styledComponents.js"
class Header extends Component {
    render() {
        const {type}=this.props
        return (
            <Container>
                <HeaderLeftPart>
                <Image type={LOGO} 
                imageURL={LOGO_IMAGEURL}/>
                <Heading>Reporting Portal</Heading>
              </HeaderLeftPart>
             {type==={RP}&& <HeaderMiddlePart>
                 <AssignedTab>Assigned to me</AssignedTab>
                 <ObservationsTab>My Observations</ObservationsTab>
                     </HeaderMiddlePart>}
              <HeaderRightPart>
                  <ProfileName>Lalitha</ProfileName>
                  <Image imageURL={PROFILE_URL}/></HeaderRightPart>

            </Container>
            );
    }
}

export { Header}