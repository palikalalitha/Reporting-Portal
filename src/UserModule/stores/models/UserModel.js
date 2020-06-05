import React, { Component } from 'react'
import { observable, action } from 'mobx'
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
   constructor(observation) {
      super(observation)
      this.id = observation.id
      this.title = observation.title
      this.priority = observation.priority
      this.reported_on = observation.reported_on
      this.due_date = observation.due_date
      this.status = observation.status
      if (observation.assigned_to !== null) {
         this.assigned_to = {
            id: observation.assigned_to.id,
            name: observation.assigned_to.name,
            contact_number: observation.assigned_to.contact_number,
            role: observation.assigned_to.role
         }
      } else {
         this.assigned_to = 'not assigned'
      }
      this.message_count = observation.message_count
   }
   // this.id =observation.observation_id
   // this.title = observation.title_of_the_observation
   // this.priority = observation.severity.severity
   // this.description = observation.description,
   // this.category = 'Asset Mangement',
   // this.sub_category = 'food',
   // this.due_date = observation.due_date
   // //this.due_date_privacy = observation.is_due_date_private
   // this.status = observation.status.status
   // this.assigned_to = {
   //    id:observation.assigned_to.user_id,
   //    name: observation.assigned_to.username,
   //    phno: observation.assigned_to.phone_number,
   //    role:observation.assigned_to.role

   // }
   //this.message_count = observation.message_count
}

export { UserModel }
