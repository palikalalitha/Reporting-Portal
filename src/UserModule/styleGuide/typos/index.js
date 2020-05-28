import styled from "@emotion/styled"
import tw from "tailwind.macro"

const ObservationContainer=styled.div `${tw``}
border-radius: 7px;
background-color: #ffffff;
margin-left:100px;
margin-right:100px`;

const ReportedPortalContainer=styled.div 
`width: 1440px;
height: 1024px;
background-color: whiteTwo;
}`;

const Container=styled.div `${tw``}
width: 1131px;
height: 872px;
border-radius: 7px;border: solid 1px #d7dfe9;
background-color: #ffffff;
margin:32px 100px 32px 100px`
const NoObservationsText=styled.h1 `
width: 315px;
height: 24px;
font-family: HKGrotesk;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: black;
`
const NoObservationContainer=styled.div `${tw`flex flex-col justify-center items-center h-screen`}`;

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
color: #171f46;
margin-right:30px`
const Typo14SteelHKGroteskRegular=styled.div `${tw`ml-2`}
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

const Wrapper=styled.div `${tw`flex  `}
margin-left:80px;
margin-top:55px`;
const SubCategoryWrapper=styled.div `${tw`flex`}
margin-left:120px;
margin-top:55px`
const WrapperMultipleElements=styled.div `${tw`flex`}
`
const ErrorMessage=styled.span `${tw`text-red-700 mb-6`}`
const SubmitButtonWrapper=styled.div `${tw ``}
margin-left:500px;
margin-top:42px`
const Mandatory=styled.span `${tw`text-red-500 mt-4`}`
const LeftSymbol=styled.span `${tw `mt-1`}`
export {Container,Typo12DarkBlueGreyRubikMedium as Label,Wrapper,
    Typo14SteelHKGroteskRegular as BackToObservation,ErrorMessage,ReportedPortalContainer,NoObservationsText,WrapperMultipleElements,
    NoObservationContainer,SubCategoryWrapper,SubmitButtonWrapper,Mandatory,LeftSymbol,ObservationContainer};