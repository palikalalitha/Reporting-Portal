import React, { Component } from 'react';
import {TextAreaElement} from "./styledComponents"
class TextArea extends Component {
    render() {
        const {data,onChangeHandler}=this.props
        return (
        <TextAreaElement defaultValue={data} onChange={onChangeHandler}></TextAreaElement>
        );
    }
}

export { TextArea};