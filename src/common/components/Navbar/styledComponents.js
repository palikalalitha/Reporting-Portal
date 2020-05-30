import styled from "@emotion/styled"
import tw from "tailwind.macro"

const NavabarHeading=styled.h1 `${tw`flex-1`}
width: 288px;
  height: 40px;
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #0b69ff;`
  const NavabarContainer=styled.div `${tw`flex justify-between items-center focus:outline-none`}
  width:1240px;
  margin-left:100px;
margin-right:100px;
  margin-top:48px;
  margin-bottom:48px;`
export {NavabarHeading,NavabarContainer}