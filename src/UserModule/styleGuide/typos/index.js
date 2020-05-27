import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Container=styled.div `${tw`p-4`}
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
const Typo14SteelHKGroteskRegular=styled.div `${tw`ml-2 mb-4`}
width: 133px;
height: 24px;
font-family: HKGrotesk;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: #7e858e;`;

const Wrapper=styled.div `${tw`flex  m-5`}`;
const ErrorMessage=styled.span `${tw`text-red-700 mb-6`}`

export {Container,Typo12DarkBlueGreyRubikMedium as Label,Wrapper,Typo14SteelHKGroteskRegular as BackToObservation,ErrorMessage};