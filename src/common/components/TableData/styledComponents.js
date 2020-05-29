
import styled from "@emotion/styled";
import tw from "tailwind.macro"
const UserFormContainer=styled.div `${tw`flex justify-between`}`
const Container=styled.div `${tw`flex justify-around`}
  background-color: #fbfbfb  ;`
const TData=styled.td `${tw`self-center`}
width: 104px;
height: 16px;
font-family: HKGrotesk;
font-size: 11px;
font-weight: 400;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #7e858e;
margin-left:28px;
text-align:center;
margin-top:15px;
margin-bottom:15px;`

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
  color:#7e858e;`;

const data=styled.div ``;
const AssignedContainer=styled.td `${tw`flex  items-center`}
margin-left:35px;
margin-top:8px;
margin-bottom:8px`;

const DueDate=styled.div ``;

const RPDetails=styled.div `${tw``}`;
const Name=styled.p `${tw`ml-2`}
width: 76px;
  height: 24px;
  font-family: HKGrotesk;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color:#7e858e;
`;
const PhoneNumber=styled.p `${tw`ml-2`}
width: 89px;
height: 16px;
font-family: HKGrotesk;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: normal;
color: #7e858e`;

const Severty=styled.td `${tw``}
width: 72px;
height: 21px;
border-radius: 100px;
margin-top:20px;
background-color:${props=>props.status=="HIGH"?"#ff0b37":props.status=="LOW"?"#2dca73":"#ffb800"};`

  const Mode=styled.label `${tw``}
  width: 64px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: #ffffff;
  margin-left:20px;
  `

  const Status=styled.span `
  height: 16px;
  font-family: HKGrotesk;
  font-size: 8px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.32px;
  color:dark-blue-grey;
  border-radius: 50px;-
  `;

const StatusWrapper=styled.div `
  width: 103px;
  height: 16px;
  border-radius: 100px;
  border:${props=>props.bgColorStatus===true?"1px solid #171f46":"1px solid #d7dfe9"};
   solid 1px  #171f46;
  background-color: white;`

  const Message=styled.h1 `${tw``}
font-size:20px;
margin-left:35px`
  
export {ReportedDate,data,AssignedContainer,TData,Severty,DueDate,Container,
  RPDetails,Name,PhoneNumber,Status,Message,Mode,StatusWrapper,UserFormContainer}