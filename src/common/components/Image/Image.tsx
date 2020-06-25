import React, { Component } from 'react'
import { ImageElement } from './styledComponents'

interface ImageProps
{
  imageURL:string
  type?:string
   value?:string|undefined
    className?:string|undefined
   onClick?:()=>void

}
class Image extends Component<ImageProps> {
   render() {
      const { imageURL, type, value, className, onClick } = this.props
      return (
         <ImageElement
         {...this.props}
            //  type={type}
              onClick={onClick}
            className={className}
            src={imageURL}
         />
      )
   }
}

export { Image }
