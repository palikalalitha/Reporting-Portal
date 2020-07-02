import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const BaseHKGroteskText = styled.label`
   font-family: 'HKGroteskRegular';
   font-display: swap;
`
// HKGroteskRegular=>
// font-family: '';
// src: url('/assets/fonts/hk-grotesk/b115e3dffbd4ad84ad19fc86980903a1/e33516e0eebee20f8857204b3ceb1281/.ttf') format('truetype');
// font-weight: bold;
// font-style: normal;

const Container = styled.div`
   ${tw`flex justify-center items-center h-screen pt-20`}
   background-color:#f1f7ff
`
const SignInContainer = styled.div`
   ${tw`flex flex-col justify-center items-center `}
   width: 500px;
   border-radius: 8px;
   background-color: white;
   box-shadow: 0 0 0 1px white;
   padding-top: 48px;
`

const WelcomeMessage = styled(BaseHKGroteskText)`
   ${tw`mt-4 mb-4`}
   /* font-family: Rubik; */
  font-size: 32px;
   /*    font-stretch: normal;
   line-height: 1.25;
   letter-spacing: normal; */
   color: #171f46;
`

const Label = styled(BaseHKGroteskText)`
   ${tw`m-2`}
   font-size: 12px;
   font-weight: 600;
   line-height: 1.33;
   letter-spacing: 0.12px;
`

const NewAccount = styled(BaseHKGroteskText)`
   ${tw`mb-10`}
   /* font-family: HKGrotesk; */
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
   WelcomeMessage,
   Label,
   NewAccount,
   SignUPLink,
   Wrapper,
   Container,
   ErrorMessage
}
