import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ButtonElement = styled.button`${tw`flex justify-center items-center ml-2 focus:outline-none`} 
width: ${props => (props.buttonType === 'primary' ? '320px' : '90px')};
cursor:${props => (props.roleType === 'user' ? 'not-allowed' : 'pointer')};
height:40px;
background-color:#0b69ff;
font-family: HKGrotesk;
font-size: 16px;
font-weight: 600;
border-radius:4px;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: #ffffff;`

export { ButtonElement }
