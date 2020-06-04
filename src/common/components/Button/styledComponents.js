import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ButtonElement = styled.button`${tw`flex justify-center items-center focus:outline-none`} 
width: ${props =>props.buttonType === 'primary' ? '320px' : '85px'};
cursor:${props =>props.roleType === 'user' ? 'not-allowed' : 'pointer'}
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

export { ButtonElement }
