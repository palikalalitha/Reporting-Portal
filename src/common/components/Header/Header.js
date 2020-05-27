import React, { Component } from 'react';
import {Image} from "../Image/"
import {Heading,Container,HeaderLeftPart,HeaderRightPart,ProfileName,HeaderMiddlePart,ObservationsTab,AssignedTab} from "./styledComponents.js"
class Header extends Component {
    render() {
        const {type}=this.props
        return (
            <Container>
                <HeaderLeftPart>
                <Image type="logo" imageURL="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/8b9ff190-f490-4211-b2dd-61f476cfeabd.svg"/>
                <Heading>Reporting Portal</Heading>
              </HeaderLeftPart>
             {type==="rp"&& <HeaderMiddlePart>
                 <AssignedTab>Assigned to me</AssignedTab>
                 <ObservationsTab>My Observations</ObservationsTab>
                     </HeaderMiddlePart>}
              <HeaderRightPart>
                  <ProfileName>Lalitha</ProfileName>
                  <Image imageURL="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4f00d506-2d1f-4bba-9084-f0666b4e3f2b@3x.png"/>
              </HeaderRightPart>

            </Container>
            );
    }
}

export { Header}