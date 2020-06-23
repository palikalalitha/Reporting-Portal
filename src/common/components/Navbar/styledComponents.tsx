import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const NavabarHeading = styled.h1`
   ${tw``}
   font-size: 22px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
   color: #0b69ff;
`
const Wrapper = styled.div`
   ${tw`flex  justify-end items-end mr-8`}
`
const NavabarContainer = styled.div`
   ${tw`flex justify-between items-center focus:outline-none m-10 `}
`

const FilterHeading = styled.div`
   ${tw`mt-4`}
`
export { NavabarHeading, NavabarContainer, FilterHeading, Wrapper }
