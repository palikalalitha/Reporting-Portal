import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const RpContainer = styled.div`
   ${tw`focus:outline-none`}
   margin:50px;
`

const NavabarHeading = styled.h1`
   ${tw``}
   font-family: HKGrotesk;
   font-size: 18px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
   color: #0b69ff;
`
export { RpContainer, NavabarHeading }
