import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Image } from '../../components/Image/index'
import { Button } from '../../components/Button/'
const TableRow = styled.tr`
   ${tw`flex justify-between hover:bg-red-200`}
   border:  1px solid #d7dfe9;
   background-color: '#ffffff';
   &:hover {
      background-color: rgba(215, 223, 233, 0.24);
   }
`

const TableContainer = styled.table`
   ${tw`ml-4`}
   background-color: #ffffff;
`

const DropDownImage = styled(Image)`
   ${tw`ml-2`}
   width: 10px;
   height: 10px;
   object-fit: contain;
`
const SortButton = styled.button`
   ${tw`bg-red-100`}
`

const TableHeadings = styled.th`
   ${tw` `}
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: 800;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: dark-blue-grey;
   padding: 25px;
   margin-left: 39px;
`

const PaginationContainer = styled.div`
   ${tw`
flex justify-center items-center mt-10`}
`
const HeadingContainer = styled.div`
   ${tw`flex`}
`

export {
   TableContainer,
   PaginationContainer,
   HeadingContainer,
   TableHeadings,
   TableRow,
   DropDownImage,
   SortButton
}
