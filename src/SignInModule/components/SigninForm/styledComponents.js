import styled from "@emotion/styled"
import tw from "tailwind.macro"
const SignInContainer=styled.div `${tw`flex flex-col justify-center items-center
h-screen  items-center`}`

const WelcomMessage=styled.div `
width: 214px;
  height: 80px;
  font-family: Rubik;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: dark-blue-grey`;

export 
{
    SignInContainer,
    WelcomMessage

}