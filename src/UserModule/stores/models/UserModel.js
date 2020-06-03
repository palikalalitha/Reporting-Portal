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
      ;(this.priority = observation.priority),
         (this.description = observation.description),
         (this.category = 'Asset Mangement'),
         (this.sub_category = 'food'),
         (this.due_date = observation.due_date)
      this.due_date_privacy = observation.due_date_privacy
      this.status = observation.status
      this.assigned_to = {
         name: observation.assigned_to.name,
         phno: observation.assigned_to.phno
      }
      this.message_count = observation.message_count
   }
}

export { UserModel }
