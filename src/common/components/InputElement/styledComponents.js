import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const InPutTextBox = styled.input`
   width: 320px;
   height: 40px;
   outline: none;
   border-radius: 2px;
   border: ${props => (props.status ? '1px solid #ff0b37' : '1px solid steel')};
   background-color: ${props =>
      props.roleType === 'user' ? 'rgba(215, 223, 233, 0.5)' : 'white'};
   box-shadow: 0 0 0 1px silver;
   padding: 5px 10px;
   disabled: ${props => props.roleType === 'user'};
`

const ErrorMessage = styled.span`
   ${tw` mt-2 text-sm`}
   color:#ff0b37;
`
export { InPutTextBox, ErrorMessage }

// border: ${props=>props.status===""?"1px solid #ff0b37":"1px solid steel"};
