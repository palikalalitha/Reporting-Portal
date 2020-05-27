import styled from "@emotion/styled"
import tw from "tailwind.macro"
const SignInContainer=styled.div `${tw`flex flex-col justify-center items-center `}
width: 536px;
height: 687px;
border-radius: 8px;
background-color: white;`

const Container=styled.div `${tw`flex justify-center`}
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
  margin-left:100px;`

  const Label=styled.label `
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

const NewAccount=styled.div `${tw`mt-4 `}
width: 200px;
height: 24px;
font-family: HKGrotesk;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
color: dark-blue-grey;`


const SignUPLink=styled.a `margin-left:5px;color:#0b69ff`;
const Wrapper=styled.div `${tw`flex flex-col mb-6 `}`;

const ErrorMessage = styled.span `${tw`text-red-700 mt-2 w-48 text-sm`}
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