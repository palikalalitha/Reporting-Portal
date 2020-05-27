import styled from "@emotion/styled";
import tw from "tailwind.macro"
const PaginationContainer=styled.div `${tw`
flex justify-center items-center`}`

const PaginationArrows=styled.img `${tw``}
filter: invert(75%);`
const ArrowSymbol=styled.button `width: 24px;
height: 24px;
border-radius: 2px;
border: solid 1px light-blue-grey;
background-color: white;
box-shadow: 0 0 0 1px silver`;

const Separator=styled.div `${tw`mx-1`}`
const PrevPageNumber=styled.p `${tw`
border border-black w-8 h-8 flex justify-center items-center`}`
const PageNumbers=styled.div `
width: 24px;
height: 24px;
border-radius: 2px;
border: solid 1px light-blue-grey;
background-color: white;
box-shadow: 0 0 0 1px silver;
margin:7px;
padding:1px`
export {
    Separator,
    PaginationContainer,
    PaginationArrows,PrevPageNumber,ArrowSymbol,PageNumbers}