
import styled from "@emotion/styled";
import tw from "tailwind.macro"
const TableContainer=styled.table `${tw``}
width:1240px;
background-color: #ffffff;`
const TableHeadings=styled.th `${tw` `}
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color:dark-blue-grey;
  padding:25px;
  margin-left:39px`
;
const TableRow=styled.tr `${tw`flex justify-between`}
border: solid 1px #d7dfe9;
background-color:${props=>props.bgColorStatus==true?"rgba(215, 223, 233, 0.24)":"#ffffff"}`;

const PaginationContainer=styled.div `${tw`
flex justify-center items-center mt-10`}`

export {TableContainer,PaginationContainer,TableHeadings,TableRow}