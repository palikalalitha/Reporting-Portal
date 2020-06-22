import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = styled.div`${tw`flex justify-center items-center h-screen pt-20`}
background-color:#f1f7ff;
}`
const SignInContainer = styled.div`
   ${tw`flex flex-col justify-center items-center `}
   width: 500px;
   border-radius: 8px;
   background-color: white;
   box-shadow: 0 0 0 1px white;
   padding-top: 48px;
`

const WelcomMessage = styled.p`
   ${tw`mt-4 mb-4`}

   font-family: Rubik;
   font-size: 32px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
   color: #171f46;
`

const Label = styled.label`
   ${tw`m-2`}
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: #7e858e;
`

const NewAccount = styled.div`
   ${tw`mb-10`}
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: dark-blue-grey;
   margin-top: 32px;
`

const SignUPLink = styled.a`
   margin-left: 5px;
   color: #0b69ff;
`
const Wrapper = styled.div`
   ${tw`flex flex-col mb-6 `}
`

const ErrorMessage = styled.span`
   ${tw` mt-2 text-sm`}
   color:#ff0b37;
`
export {
   SignInContainer,
   WelcomMessage,
   Label,
   NewAccount,
   SignUPLink,
   Wrapper,
   Container,
   ErrorMessage
}
