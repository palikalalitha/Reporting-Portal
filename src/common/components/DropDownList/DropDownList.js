import React, { Component } from 'react'
import { Option, OptionContainer } from './styledComponents'
import Select from 'react-select'
import styles from './SelectBox.css'
class DropDownList extends Component {
   static defaultProps = {
      status: false,
      testid: 'select',
      onChangeHandler: () => {},
      optionsList: [
         { value: 'food', label: 'Food' },
         { value: 'Accomdation', label: 'Accomadation' }
      ]
   }
   render() {
      const {
         optionsList,
         onChangeHandler,
         value,
         status,
         roleType,
         testid,
         className
      } = this.props
      return (
         <Select
            data-testid={testid}
            className={status ? 'border-container' : 'select-container'}
            defaultInputValue={value}
            classNamePrefix={'option'}
            onChange={onChangeHandler}
            options={optionsList}
            isDisabled={roleType==="user"?true:false}
            isSearchable={true}
         />
      )
   }
}

export { DropDownList }