import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import { DropDownList } from '../../../common/components/DropDownList/DropDownList'
import { Button } from '../../../common/components/Button'

import { colors } from '../../Themes/Colors'
import {
   Typo24DarkBlueGreyHKGroteskMedium,
   Typo12DarkBlueGreyRubikMedium,
   Typo14DarkBlueGreyHKGroteskRegular
} from '../../styleGuide/typos/index'

const ObservationScreenConatiner = styled.div`
   ${tw`flex flex-col p-10`}
   width: 1131px;
   height: 1045px;
   border-radius: 7px;
   border: 1px solid ${colors.lightBlueGrey};
   margin: 60px 80px;
`

const Wrapper = styled.div`
   ${tw`flex`}
   margin:20px 20px;
`
const ObservationTitle = styled(Typo24DarkBlueGreyHKGroteskMedium)`
   ${tw`ml-2`}
`

const Description = styled.p`
   ${tw`ml-4`}
   overflow:auto;
   cursor: ${props => (props.roleType === 'user' ? 'none' : 'pointer')};
`

const Category = styled.div`
   ${tw`flex `}
`
const Label = styled(Typo12DarkBlueGreyRubikMedium)`
   ${tw`mr-4`}
`
const SubCategory = styled.div`
   ${tw`flex ml-8`}
`

const Dropdown = styled(DropDownList)`
   width: 193px;
   height: 40px;
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
   box-shadow: 0 0 0 1px silver;
`

const RadioButtonWrapper = styled.div`
   ${tw`flex justify-start`}
   margin-left:180px
`
const ResetButton = styled(Button)`
width: 75px;
height: 40px;
border-radius: 4px;
border:  1px solid #d7dfe9;
background-color: white;
color:#171f46;
padding:4px;
pointerEvents: :${props => (props.roleType === 'user' ? 'not-allowed' : 'auto')}

}`
const ArrorSymbol = styled.div`
   ${tw`mt-2`}
`
const ButtonWrapper = styled.div`
   ${tw`flex justify-center mt-2`}
`
export {
   ObservationScreenConatiner,
   Dropdown,
   ButtonWrapper,
   ArrorSymbol,
   ResetButton,
   Wrapper,
   ObservationTitle,
   RadioButtonWrapper,
   Label,
   Description,
   Category,
   SubCategory
}
