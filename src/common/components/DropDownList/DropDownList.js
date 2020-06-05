import React, { Component } from 'react'
import { Option, OptionContainer } from './styledComponents'
import Select from 'react-select'
import styles from './SelectBox.css'
import { observer } from 'mobx-react'

@observer
class DropDownList extends Component {
   static defaultProps = {
      status: false,
      testid: 'select',
      onChangeHandler: () => {},
      roleType: 'user',
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
      console.log(value)
      return (
         <Select
            data-testid={testid}
            className={status ? 'border-container' : 'select-container'}
            defaultInputValue={value}
            classNamePrefix={'option'}
            onChange={onChangeHandler}
            isDisabled={roleType === 'user' ? true : false}
            options={optionsList}
         />
      )
   }
}

export { DropDownList }
