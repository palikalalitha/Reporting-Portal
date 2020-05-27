import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Container=styled.div `
border-radius: 7px;
border: solid 1px #d7dfe9;
background-color: #ffffff`;

const Typo12DarkBlueGreyRubikMedium=styled.label `
width: 165px;
height: 24px;
font-family: Rubik;
font-size: 16px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 2;
letter-spacing: 0.12px;
color: #171f46`
const Wrapper=styled.div `${tw`flex  m-6 `}`;

export {Container,Typo12DarkBlueGreyRubikMedium as Label,Wrapper};