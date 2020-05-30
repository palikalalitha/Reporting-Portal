import styled from "@emotion/styled"
import tw from "tailwind.macro"
const Select=styled.select 
`width: 249px;
height: 40px;
border-radius: 2px;
outline:none;
border:1px solid steel;
background-color:white;
box-shadow: 0 0 0 1px silver`

const OptionContainer=styled.div `
width: 181px;
  height: 184px;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(23, 31, 70, 0.16);
  background-color: white;`
  
const Option=styled.option `
height: 24px;
font-family: HKGrotesk;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: steel;
text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);`
export {Select,OptionContainer,Option}

{/*// border: ${props=>props.status===""?"1px solid #ff0b37":"1px solid steel"};*/}