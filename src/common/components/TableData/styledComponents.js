
import styled from "@emotion/styled";
import tw from "tailwind.macro"
const Container=styled.div `${tw`flex justify-around`}`
const Title=styled.div `
width: 104px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: steel;
  margin-left:40px;
  margin-top:20px`
const ReportedDate=styled.td  `
width: 129px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color:steel;`;
const data=styled.div ``;
const AssignedContainer=styled.div `${tw`flex`}`;
const DueDate=styled.div ``;

const RPDetails=styled.div `${tw`m-0`}`;
const Name=styled.h1 `${tw`ml-2`}`;
const PhoneNumber=styled.h4 `${tw`ml-2`}`;
const Severty=styled.button `${tw``}
width: 72px;
  height: 21px;
  border-radius: 100px;
  background-color: #ff0b37;`
  const Status=styled.button ` width: 95px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 8px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.32px;
  color:dark-blue-grey;
  border-radius: 100px;`
  const Message=styled.div ``
  const Mode=styled.label `
  width: 64px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: white;`
export {Title,ReportedDate,data,AssignedContainer,Severty,DueDate,Container,
  RPDetails,Name,PhoneNumber,Status,Message,Mode}