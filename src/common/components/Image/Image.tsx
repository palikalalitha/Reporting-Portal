import React, { Component } from 'react'
import { ImageElement } from './styledComponents'
class Image extends Component {
   render() {
      const { imageURL, type, value, className, onClick } = this.props
      return (
         <ImageElement
            value={value}
            onClick={onClick}
            className={className}
            type={type}
            src={imageURL}
         />
      )
   }
}

export { Image }
