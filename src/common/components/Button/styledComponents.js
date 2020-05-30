import styled from "@emotion/styled"
import tw from "tailwind.macro"

const ButtonElement=styled.button `${tw`focus:outline-none`} 
width: ${props=>props.buttonType==="primary"?"320px":"85px"};
  height: 40px;
  background-color:#0b69ff;
  margin:10px;
  padding:4px;`


const Label=styled.label`
width: 57px;
height: 24px;
font-family: HKGrotesk;
font-size: 16px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: #ffffff;
outline:none;`



export {ButtonElement,Label }