import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {InputElementProps} from "../InputElement/styledComponents"

const TextAreaElement = styled.textarea<InputElementProps> `${tw``}
   width: 646px;
   height: 200px;
   border-radius: 2px;
   outline: none;
   background-color: white;
   box-shadow: 0 0 0 1px silver;
   border:${props=>props.status === '' || status === undefined? '1px solid light-blue-grey':'1px solid red'};
   font-family: HKGrotesk;
   font-size: 16px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   letter-spacing: normal;
   color: dark-blue-grey;
`

export { TextAreaElement }