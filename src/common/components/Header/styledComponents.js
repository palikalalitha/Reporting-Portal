import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Button } from "../Button"
const Heading = styled.h1`
   outline: none;
  
   font-family: HKGrotesk;
   font-size: 20px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: dark-blue-grey;
   align-self: center;
   margin-left: 15px;
`
const Container = styled.div`
   ${tw`flex justify-between`}
   border: solid 1px #d7dfe9;
`
const HeaderLeftPart = styled.div`
   ${tw`flex `}flex-grow: 0.5
`
const HeaderRightPart = styled.div`
   ${tw`flex pt-4`}
`
const ProfileName = styled.div`
   ${tw`mt-0`}
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
   align-self: center;
   margin-right: 20px;
   margin-bottom: 15px;
`

const HeaderMiddlePart = styled.div`
   ${tw`flex mt-8`}
`
const AssignedTab = styled.h1`
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: #0b69ff;
   margin-left: 20px;
`
const ObservationsTab = styled.h1`
  
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: #7e858e;
   margin-left: 20px;
`
const LogOutButton=styled.button `${tw`p-2 focus:outline-none h-10 mr-2 mt-3`} 
box-shadow: 0 0 0 1px silver;
font-family: HKGrotesk;
font-size: 16px;
font-weight: 600;
border-radius:4px;
font-stretch: normal;
font-style: normal;
line-height: 1.71;
letter-spacing: normal;
`

export {
   Heading,
   Container,
   HeaderLeftPart,
   HeaderRightPart,
   ProfileName,
   HeaderMiddlePart,
   AssignedTab,
   LogOutButton,
   ObservationsTab
}
