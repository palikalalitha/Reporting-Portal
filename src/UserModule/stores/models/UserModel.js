import React, { Component } from 'react';
import { observable, action } from "mobx"
class UserModel extends Component {
    id
    @observable title
    @observable category
    @observable priority
    @observable description
    @observable sub_category
    @observable due_Date
     @observable status
     @observable assigned_to
    constructor(observation){
        super(observation)
        this.id = Math.random()
        this.title = observation.title
            this.priority = observation.priority,
            this.description=observation.description,
            this.category="Asset Mangement",
            this.sub_category="food",
            this.due_date=Date.now();
            this.status="Action in progress",
            this.assigned_to=
            {
                name:"Lalitha",
                phno:9000023450
            }


    }
}

export { UserModel};