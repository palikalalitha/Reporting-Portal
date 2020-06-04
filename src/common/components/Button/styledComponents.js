import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ButtonElement = styled.button`${tw`flex justify-center focus:outline-none`} 
width: ${props => (props.buttonType === 'primary' ? '320px' : '85px')};
pointer-events:${props => (props.roleType==="user" ? 'none' : 'auto')}
height: 40px;
background-color:#0b69ff;
margin:10px;
padding:4px;
font-family: HKGrotesk;
font-size: 16px;
font-weight: 600;
border-radius:4px;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: #ffffff;`

const Label = styled.label`
   ${tw`mt-1`}
   font-family: HKGrotesk;
   font-size: 16px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: #ffffff;
`

export { ButtonElement, Label }
