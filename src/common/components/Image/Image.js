import React, { Component } from 'react';
import {ImageElement} from "./styledComponents"
class Image extends Component {
    render() {
        const {imageURL,type,className}=this.props
        return (
            <ImageElement className={className} type={type} src={imageURL}/>
        );
    }
}

export { Image};