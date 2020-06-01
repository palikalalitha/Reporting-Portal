import React, { Component } from 'react';
import {TextAreaElement} from "./styledComponents"
class TextArea extends Component {
    static defaultProps = {
        status:false,
        testid:""
}
    render() {
        const {data,onChangeHandler,status,testid}=this.props
        return (
        <TextAreaElement status={status} data-testid={testid} defaultValue={data} onChange={onChangeHandler}></TextAreaElement>
        );
    }
}

export { TextArea};