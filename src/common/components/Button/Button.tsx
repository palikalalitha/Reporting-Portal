import React, { Component } from 'react'

import { ButtonElement } from './styledComponents'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

interface ButtonElementProps {
   buttonText: string
   onClickHandler:()=>void
   buttonType?:string
   roleType?:string
   buttonStatus?:boolean
   className?:string
}
class Button extends Component<ButtonElementProps> {
   render() {
      const {
         buttonText,
         onClickHandler,
         buttonStatus,
         roleType,
         className
      } = this.props
      return (
         <ButtonElement
            disabled={roleType === 'user' ? true : false}
            onClick={onClickHandler}
           {...this.props}
            className={className}
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
