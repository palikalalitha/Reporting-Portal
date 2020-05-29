import styled from "@emotion/styled"
import tw from "tailwind.macro"
const Heading=styled.h1 `
width: 177px;
outline:none;
  height: 25px;
  font-family: HKGrotesk;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: dark-blue-grey;
align-self:center;
margin-left:15px;`
const Container=styled.div `${tw`flex justify-between`}
border: solid 1px #d7dfe9;`
const HeaderLeftPart=styled.div `${tw`flex `}flex-grow:0.5`
const HeaderRightPart=styled.div `${tw`flex pt-4`}`
const ProfileName=styled.div `${tw`mt-0`}
width: 45px;
  height: 24px;
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: dark-blue-grey;
  align-self:center;
margin-right:20px;
margin-bottom:15px`

const HeaderMiddlePart=styled.div `${tw`flex mt-8`}`
const AssignedTab=styled.h1 `
width: 122px;
height: 24px;
font-family: HKGrotesk;
font-size: 18px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color:#0b69ff;
margin-left:10px`;
const ObservationsTab=styled.h1 `
width: 146px;
  height: 24px;
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #7e858e;
  margin-left:10px`;

export {Heading,Container,HeaderLeftPart,HeaderRightPart,ProfileName,HeaderMiddlePart,AssignedTab,ObservationsTab}