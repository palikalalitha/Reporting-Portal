import styled from "@emotion/styled"
import tw from "tailwind.macro"
const InPutTextBox=styled.input `
width: 320px;
  height: 40px;
  outline:none;
  border-radius: 2px;
  border:1px solid steel
  background-color: white;
  box-shadow: 0 0 0 1px silver;
 `
export {InPutTextBox}

// border: ${props=>props.status===""?"1px solid #ff0b37":"1px solid steel"};