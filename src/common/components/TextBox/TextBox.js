import React, { Component } from 'react'
import { InputBox } from './styledComponents'
import { observer } from 'mobx-react'
import { isEnterKeyEvent } from "../../utils/AppUtils"
import { observable,action } from "mobx"
import { ValidateUserName } from "../../../SignInModule/utils/validationUtil"

@observer
class TextBox extends Component {
    @observable userInput=""
    @observable shoulShowErrorMessage=false
    @observable erroMessage=""
    onChangeName=(event)=>
    {
       this.userInput=event.target.value
        this.shoulShowErrorMessage=false
        this.erroMessage=""
       this.props.onChangeHandler(this.userInput)
    }
    onBlur=()=>
    {
       const {shouldShowErrorMessgae,errorMessage1}=ValidateUserName(this.userInput)
       this.shoulShowErrorMessage=shouldShowErrorMessgae
       this.erroMessage=errorMessage1
    }
   render() {
      const {
         type,
         borderStyles,
         value,
         onChangeHandler,
         roleType,
         status,
         testid
      } = this.props
      return (
          <>
        <InputBox
            type={type}
            roleType={roleType}
            data-testid={testid}
            defaultValue={value}
            onChange ={this.onChangeName}
            onBlur={this.onBlur}
            borderStyles={borderStyles}
         />
         {this.shoulShowErrorMessage&&<p>{this.erroMessage}</p>}
         </>
      )
   }
}

export { TextBox }
