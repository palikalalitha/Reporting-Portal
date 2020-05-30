import styled from "@emotion/styled"
import tw from "tailwind.macro"
const SignInContainer=styled.div `${tw`flex flex-col items-center `}
width: 536px;
height: 687px;
border-radius: 8px;
background-color: white;
box-shadow: 0 0 0 1px white;
padding-top:48px`

const Container=styled.div `${tw`flex justify-center items-center ` }
width: 1440px;
height: 1024px;
background-color:#f1f7ff;
}`;

const WelcomMessage=styled.p `
width: 214px;
  height: 80px;
  font-family: Rubik;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #171f46;
  margin-left:120px;
  padding-top:24px`

  const Label=styled.label `${tw`mb-2`}
  width: 66px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: #7e858e;`;

const NewAccount=styled.div `${tw` `}
width: 200px;
height: 24px;
font-family: HKGrotesk;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: dark-blue-grey;
margin-top:32px`


const SignUPLink=styled.a `margin-left:5px;color:#0b69ff`;
const Wrapper=styled.div `${tw`flex flex-col mb-6 `}`;

const ErrorMessage = styled.span `${tw` mt-2 w-48 text-sm`}
color:#ff0b37;
color:${props=>props.status==="Loading"?"green":""}
;`
export 
{
    SignInContainer,
    WelcomMessage,
    Label,NewAccount,
    SignUPLink,
    Wrapper,
    Container,
    ErrorMessage
}