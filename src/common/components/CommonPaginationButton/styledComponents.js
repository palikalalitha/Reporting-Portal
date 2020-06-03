import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const PaginationButtons = styled.button`
   width: 24px;
   height: 24px;
   border-radius: 2px;
   border: solid 1px light-blue-grey;
   background-color: white;
   box-shadow: 0 0 0 1px silver;
`
// cursor:${props=>props.isDisabled?"not-allowed":"default"};
// color:${props=>props.isDisabled?"silver":"black"}`

const PaginationArrows = styled.img`
   ${tw``}
   filter: invert(75%);
`
export { PaginationButtons, PaginationArrows }
