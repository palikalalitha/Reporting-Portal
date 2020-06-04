import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Select = styled.select`${tw`focus:outline-none`}
width: 249px;
height: 40px;
border-radius: 2px;
border:${props => (props.status ? '1px solid red' : '1px solid steel')};
background-color:${props =>
   props.roleType === 'user' ? 'rgba(215, 223, 233, 0.5);' : 'white'};
cursor:${props => (props.roleType === 'user' ? 'none' : 'pointer')}
box-shadow: 0 0 0 1px silver;
&:disabled{
  opacity: 0.6;
}`

const OptionContainer = styled.div`
   width: 181px;
   height: 184px;
   border-radius: 4px;
   box-shadow: 0 4px 16px 0 rgba(23, 31, 70, 0.16);
   background-color: white;
`

const Option = styled.option`
   ${tw`focus:outline-none`}
   height: 24px;
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: steel;
   text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`
export { Select, OptionContainer, Option }

{
   /*// border: ${props=>props.status===""?"1px solid #ff0b37":"1px solid steel"};*/
}
