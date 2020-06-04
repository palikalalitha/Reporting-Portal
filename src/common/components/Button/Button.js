import React, { Component } from 'react'

import { ButtonElement } from './styledComponents'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

class Button extends Component {
   static defaultProps = {
      buttonText: '',
      buttonStatus: false,
      buttonType: '',
      roleType: "",
      onClickHandler: () => {}
   }
   render() {
      const {
         buttonText,
         buttonType,
         onClickHandler,
         buttonStatus,
         roleType,
         className
      } = this.props
      return (
         <ButtonElement
         disabled={roleType==="user"?true:false}
            onClick={onClickHandler}
            roleType={roleType}
            className={className}
            buttonType={buttonType}
         >
            {buttonStatus ? (
               <Loader type='Oval' color='White' height={25} width={20} />
            ) : (
               buttonText
            )}
         </ButtonElement>
      )
   }
}

export { Button }
