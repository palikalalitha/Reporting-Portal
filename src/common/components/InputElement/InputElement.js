import React, { Component } from 'react'
import { InPutTextBox, ErrorMessage } from './styledComponents'
import { observer } from 'mobx-react'
import { isEnterKeyEvent } from '../../utils/AppUtils'
import { observable, action } from 'mobx'
import { ValidateUserName } from '../../../SignInModule/utils/validationUtil'

@observer
class InputElement extends Component {
   @observable userInput = ''

   @observable shouldShowErrorMessage = false
   @observable errorMessage = ''
   onChangeName = event => {
      this.userInput = event.target.value
      this.shouldShowErrorMessage = false
      this.errorMessage = ''
      this.props.onChangeHandler(this.userInput)
   }
   onBlur = () => {
      const {
         shouldShowErrorMessgae,
         errorMessage
      } = this.props.validateInputElements(this.userInput)
      this.shouldShowErrorMessage = shouldShowErrorMessgae
      this.errorMessage = errorMessage
   }
   render() {
      const { type, value, roleType, status, testid } = this.props
      return (
         <>
            <InPutTextBox
               ref={this.props.forwardRef}
               id={testid}
               type={type}
               roleType={roleType}
               data-testid={testid}
               status={this.shouldShowErrorMessage}
               defaultValue={value}
               onChange={this.onChangeName}
               onBlur={this.onBlur}
            />
            {this.shouldShowErrorMessage && (
               <ErrorMessage>{this.errorMessage}</ErrorMessage>
            )}
         </>
      )
   }
}

export { InputElement }
