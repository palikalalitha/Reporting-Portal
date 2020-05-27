import styled from "@emotion/styled"
import tw from "tailwind.macro"
const ButtonElement=styled.button ` 
width: ${props=>props.type==="primary"?"320px":"85px"};
  height: 40px;
  border-radius: 4px;
  background-color:#0b69ff;`


const Label=styled.label`
width: 52.3px;
height: 24px;
font-family: Rubik;
font-size: 14px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: white;`

export {ButtonElement,Label }