import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Table } from "../../../common/components/Table/Table";
import NoObservations from "../NoObservations/NoObservations"
import {ObservationContainer} from "../../styleGuide/typos"

@observer
class ObservationList extends Component {
    render() {
        const {observationList,gotoUserForm,gotoObservationList}=this.props
        return (
            <ObservationContainer>
            {observationList.length>0?
                <Table  {...this.props} 
                   headings={['TITLE',"REPORTED ON","ASSIGNED TO","SEVERITY","STATUS","DUE DATE","MESSAGES"]} 
                    observationList={observationList}/>:
                <NoObservations 
                    gotoUserForm={gotoUserForm} 
                    gotoObservationList={gotoObservationList} />}
            </ObservationContainer>
        );
    }
}

export {ObservationList};