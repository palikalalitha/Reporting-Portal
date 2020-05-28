import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Table } from "../../../common/components/Table/Table";
import NoObservations from "../NoObservations/NoObservations"
import {ObservationContainer} from "../../styleGuide/typos"
observer
class ObservationList extends Component {
    render() {
        const {observationList,gotoUserForm,gotoObservationList}=this.props
        return (
            <ObservationContainer>
            {observationList.length>1?
            <Table  gotoUserForm={gotoUserForm} gotoObservationList={gotoObservationList} headings={['TITLE',"REPORTED ON","ASSIGNED TO","SEVERITY","STATUS","DUE DATE","MESSAGES"]} 
            observationList={observationList}/>:<NoObservations gotoObservationList={gotoObservationList} gotoUserForm={gotoUserForm} />}
            </ObservationContainer>
        );
    }
}

export {ObservationList};