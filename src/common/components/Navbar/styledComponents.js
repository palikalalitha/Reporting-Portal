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
const NavabarContainer = styled.div`
   ${tw`flex justify-between items-center focus:outline-none m-10`}
`
export { NavabarHeading, NavabarContainer }
