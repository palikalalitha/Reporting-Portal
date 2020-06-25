import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { ObservationObject } from "../types"

class UserModel extends Component{
   id:string
   @observable  title:string
   @observable  priority:string
   @observable due_date:string
   @observable   status:string
   @observable assigned_to:
   {
      name:string
      contact_number:number
      role:string
   }|any
   @observable   reported_on?:string
   @observable   message_count:number
   constructor(observation:ObservationObject) {
      super(observation)
      this.id = observation.id
      this.title = observation.title
      this.priority = observation.priority
      this.reported_on = observation.reported_on
      this.due_date = observation.due_date
      this.status = observation.status
      if (observation.assigned_to !== null) {
         this.assigned_to = {
            //  id: observation.assigned_to.id,
            name: observation.assigned_to.name,
            contact_number: observation.assigned_to.contact_number,
            role: observation.assigned_to.role
         }
      } else {
         this.assigned_to = 'not assigned'
      }
      this.message_count = observation.message_count
   }
}

export { UserModel }
