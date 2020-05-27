import React, { Component } from 'react';
import {ImageElement} from "./styledComponents"
class Image extends Component {
    render() {
        const {imageURL,type}=this.props
        return (
            <ImageElement type={type} src={imageURL}/>
        );
    }
}

export { Image};