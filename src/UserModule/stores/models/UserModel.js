import React, { Component } from 'react';
import { observable, action } from "mobx"
class UserModel extends Component {
    id
    @observable title
    @observable category
    constructor(observation) {
        super(observation)
        this.id = Date.now()
        this.title = observation.title
        this.category = observation.category
    }
}

export { UserModel};