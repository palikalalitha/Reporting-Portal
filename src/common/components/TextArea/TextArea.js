import React, { Component } from 'react';
import {TextAreaElement} from "./styledComponents"
class TextArea extends Component {
    render() {
        const {data,onChangeHandler,status}=this.props
        return (
        <TextAreaElement status={status} defaultValue={data} onChange={onChangeHandler}></TextAreaElement>
        );
    }
}

export { TextArea};