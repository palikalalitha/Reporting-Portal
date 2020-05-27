import React, { Component } from 'react';
import {TextAreaElement} from "./styledComponents"
class TextArea extends Component {
    render() {
        const {data}=this.props
        return (
        <TextAreaElement>{data}</TextAreaElement>
        );
    }
}

export { TextArea};