import React, { Component } from 'react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import { UserForm } from '../../components/UserForm/UserForm'

import { ERROR_MESSAGE, DEFAULT_VALUE } from '../../constants/userPageConstants'
import { USER_CREATION_FORM } from '../../constants/RouteConstants'
import { userStore } from '../../stores/index'

@observer
class UserFormRoute extends Component {
   @observable title
   @observable severity
   @observable description
   @observable category_id
   @observable sub_category_id

   @observable errorMessageForSeverity
   @observable errorMessageForTitle
   @observable errorMessageForDescription
   constructor() {
      super()
      this.init()
   }
   init = () => {
      this.title = ''
      this.severity = ''
      this.description = ''
      this.category_id = DEFAULT_VALUE
      this.sub_category_id = DEFAULT_VALUE

      this.errorMessageForSeverity = ''
      this.errorMessageForTitle = ''
      this.errorMessageForDescription = ''
   }

   onChangeTitle = event => {
      this.title = event.target.value
      this.errorMessageForTitle = ''
      this.errorMessageForDescription = ''
      this.errorMessageForSeverity = ''
   }

   onChangeDescription = event => {
      this.description = event.target.value
      this.errorMessageForDescription = ''
   }

   onChangeToSelectSeverity = option => {
      this.severity = option
      this.errorMessageForSeverity = ''
   }
   onChangeToSelectCategory = option => {
      this.category_id = option
   }
   onChangeToSelectSubCategory = option => {
      this.sub_category_id = option
   }
   addObservation = () => {
      this.handleSubmit()
   }
   handleSubmit = () => {
      if (this.title === '') {
         this.errorMessageForTitle = ERROR_MESSAGE
      }
      if (this.severity === '') {
         this.errorMessageForSeverity = ERROR_MESSAGE
      }
      if (this.description === '') {
         this.errorMessageForDescription = ERROR_MESSAGE
      } else if (
         this.title === '' &&
         this.description === '' &&
         this.severity === ''
      ) {
         this.errorMessageForTitle = ERROR_MESSAGE
      } else if (this.severity === '' && this.description === '') {
         this.errorMessageForSeverity = ERROR_MESSAGE
      } else if (this.description === '') {
         this.errorMessageForDescription = ERROR_MESSAGE
      } else if (
         this.severity !== '' &&
         this.description !== '' &&
         this.title !== ''
      ) {
         alert('submitted successfully')

         userStore.onAddObservationList(
            this.title,
            this.severity.value,
            this.description,
            this.category_id,
            this.sub_category_id
         )
         this.gotoObservationList()
      }
   }

   naviagteToUserForm = () => {
      this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () => {
      this.props.history.goBack()
   }
   render() {
      const {
         title,
         severity,
         description,
         onChangeTitle,
         onChangeDescription,
         errorMessageForSeverity,
         errorMessageForTitle,
         errorMessageForDescription,
         onChangeToSelectSubCategory,
         onChangeToSelectCategory,
         addObservation,
         onChangeToSelectSeverity,
         naviagteToUserForm,
         gotoObservationList
      } = this
      const {
         createObservationsAPIStatus,
         createObservationsAPIError
      } = userStore
      console.log(createObservationsAPIError, createObservationsAPIStatus)

      return (
         <UserForm
            gotoObservationList={gotoObservationList}
            gotoUserForm={naviagteToUserForm}
            observationTitle={title}
            observationDescription={description}
            observationSeverity={severity}
            errorMessageForSeverity={errorMessageForSeverity}
            errorMessageForDescription={errorMessageForDescription}
            errorMessageForTitle={errorMessageForTitle}
            onChangeTitle={onChangeTitle}
            onChangeToSelectCategory={onChangeToSelectCategory}
            onChangeToSelectSubCategory={onChangeToSelectSubCategory}
            onChangeDescription={onChangeDescription}
            onChangeSelectValue={onChangeToSelectSeverity}
            addObservation={addObservation}
         />
      )
   }
}

export default withRouter(UserFormRoute)
