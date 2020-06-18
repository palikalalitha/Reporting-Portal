import React, { Component } from 'react'
import { observable, toJS } from 'mobx'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { UserForm } from '../../components/UserForm/UserForm'

import { ERROR_MESSAGE, DEFAULT_VALUE } from '../../constants/userPageConstants'
import { USER_CREATION_FORM } from '../../constants/RouteConstants'
import LoadingWrapperWithFailure from '../../../common/components/LoadingWrapperWithFailure'
import { DesktopLayout } from '../../../common/components/DesktopLayout/DesktopLayout'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

@inject('userStore')
@observer
class UserFormRoute extends Component {
   @observable title
   @observable severity
   @observable description
   @observable category_id
   @observable sub_category_id
   @observable errorMessage
   @observable category = []
   subCategory = []

   @observable errorMessageForSeverity
   @observable errorMessageForTitle
   @observable errorMessageForDescription
   @observable categoryList
   constructor() {
      super()
      this.init()
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      const { categories } = this.props.userStore
      this.category[0] = [{ value: 'Select', label: '' }]
      this.props.userStore.onClickTogetCategories()
      categories.map((eachCategory, index) => {
         this.category[eachCategory.category_id] = [
            {
               value: eachCategory.category_name,
               label: eachCategory.category_name
            }
         ]

         this.subCategory[eachCategory.category_id] = [
            eachCategory.sub_category
         ]
      })
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
      this.errorMessage = ''
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
         this.props.userStore.onAddObservationList(
            this.title,
            this.severity.value,
            this.description,
            this.category_id.value,
            this.sub_category_id.value,
            this.onSuccess,
            this.onFailure
         )
      }
   }

   onSuccess = () => {
      this.gotoObservationList()
   }

   onFailure = () => {
      const { createObservationsAPIError: apiError } = this.props.userStore
      if (apiError !== undefined || apiError != null) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }
   naviagteToUserForm = () => {
      this.props.history.push(USER_CREATION_FORM)
   }
   gotoObservationList = () => {
      this.props.history.goBack()
   }
   renderSuccessUI = observer(() => {
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
         createObservationsAPIError,
         getCategoriesAPIError,
         getCategoriesAPIStatus
      } = this.props.userStore
      return (
         <UserForm
            doNetworkCalls={this.doNetworkCalls}
            categoryList={this.categoryList}
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
   })
   render() {
      const {
         createObservationsAPIStatus,
         createObservationsAPIError,
         getCategoriesAPIError,
         getCategoriesAPIStatus
      } = this.props.userStore
      return (
         <DesktopLayout>
            <LoadingWrapperWithFailure
               apiStatus={getCategoriesAPIStatus}
               apiError={getCategoriesAPIError}
               renderSuccessUI={this.renderSuccessUI}
               onRetryClick={this.doNetworkCalls}
            />
         </DesktopLayout>
      )
   }
}

export default withRouter(UserFormRoute)
