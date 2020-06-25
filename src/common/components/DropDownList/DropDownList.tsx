import React, { Component } from 'react'
import { Option, OptionContainer } from './styledComponents'
import Select from 'react-select'
import "./SelectBox.css"
import { observer } from 'mobx-react'

interface DropDownListProps
{
   optionsList:string
   onChangeHandler:(option: any)=>void
   value:string
   status:string
   roleType?:string
   testid:string
   className:string
}
@observer
class DropDownList extends Component<DropDownListProps> {
   // static defaultProps = {
   //    status: false,
   //    testid: 'select',
   //    onChangeHandler: () => {},
   //    roleType: 'user',
   //    optionsList: [
   //       { value: 'food', label: 'Food' },
   //       { value: 'Accomdation', label: 'Accomadation' }
   //    ]
   // }
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
            isDisabled={roleType === 'user' ? true : false}
            options={optionsList}
         />
      )
   }
}

export { DropDownList }