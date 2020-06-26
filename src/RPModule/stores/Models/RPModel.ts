import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { RPObservationObject } from "../types"

class RPModel extends Component{
   id:string
   @observable  title:string
   @observable  priority:string
   @observable due_date:string
   @observable   status:string
   @observable reported_by?:
   {
      name:string
      contact_number:number
      role:string
   }|any
   @observable   reported_on?:string
   @observable   message_count:number
   constructor(observation:RPObservationObject) {
      super(observation)
      this.id = observation.id
      this.title = observation.title
      this.priority = observation.priority
      this.reported_on = observation.reported_on
      this.due_date = observation.due_date
      this.status = observation.status
      if (observation.reported_by !== null) {
         this.reported_by = {
            //  id: observation.assigned_to.id,
            name: observation.reported_by.name,
            contact_number: observation.reported_by.contact_number,
            //role: observation.reported_by.role
         }
      } else {
         this.reported_by = 'not assigned'
      }
      this.message_count = observation.message_count
   }
}

export { RPModel }
