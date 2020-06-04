import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../Themes/Colors'

const Typo24DarkBlueGreyHKGroteskMedium = styled.div`
   width: 208px;
   height: 32px;
   font-family: HKGrotesk;
   font-size: 24px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const Typo14DarkBlueGreyHKGroteskRegular = styled.span`
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const Typo12DarkBlueGreyRubikMedium = styled.label`
   width: 165px;
   height: 24px;
   font-family: Rubik;
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 2;
   letter-spacing: 0.12px;
   color: ${colors.darkBlueGrey};
   margin-right: 30px;
`

const Typo14SteelHKGroteskRegular = styled.div`
   ${tw`ml-2`}
   width: 133px;
   height: 24px;
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.steel};
`

const ObservationContainer = styled.div`
   ${tw`focus:outline-none`}
   margin:50px;
`
//    ${tw``}
//    border-radius: 7px;
//    background-color: #ffffff;
//   ;`

const ReportedPortalContainer = styled.div`
   ${tw``}
   background-color: #fbfbfb;
   outline: none;
`

const UserFormContainer = styled.div`
   ${tw``}
   width: 1131px;
   height: 900px;
   border-radius: 7px;
   border: solid 1px #d7dfe9;
   background-color: #ffffff;
   margin: 32px 100px 32px 100px;
`

const NoObservationsText = styled.h1`
   width: 315px;
   height: 24px;
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: black;
`
const NoObservationContainer = styled.div`
   ${tw`flex flex-col justify-center items-center h-screen`}
   outline:none
`

const Wrapper = styled.div`
   ${tw`flex  `}
   margin-left:80px;
   margin-top: 55px;
`
const SubCategoryWrapper = styled.div`
   ${tw`flex`}
   margin-left:120px;
   margin-top: 55px;
`
const WrapperMultipleElements = styled.div`
   ${tw`flex`}
`
const ErrorMessage = styled.div`
   ${tw` mt-4 mb-1`}
   color:#ff0b37
`
const SubmitButtonWrapper = styled.div`
   ${tw`mb-2`}
   margin-left:500px;
   margin-top: 30px;
   outline: none;
`
const Mandatory = styled.span`
   ${tw`text-red-500 mt-4`}
`
const LeftSymbol = styled.span`
   ${tw`mt-1`}
`
export {
   UserFormContainer,
   Typo12DarkBlueGreyRubikMedium as Label,
   Wrapper,
   Typo14SteelHKGroteskRegular as BackToObservation,
   ErrorMessage,
   ReportedPortalContainer,
   NoObservationsText,
   WrapperMultipleElements,
   NoObservationContainer,
   SubCategoryWrapper,
   Typo24DarkBlueGreyHKGroteskMedium,
   SubmitButtonWrapper,
   Mandatory,
   LeftSymbol,
   ObservationContainer,
   Typo14DarkBlueGreyHKGroteskRegular,
   Typo12DarkBlueGreyRubikMedium
}
