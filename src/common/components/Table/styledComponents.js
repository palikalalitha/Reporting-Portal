
import styled from "@emotion/styled";
import tw from "tailwind.macro"
const TableContainer=styled.div `${tw``}`
const TableHeadings=styled.div `${tw` `}
width: 33px;
  height: 16px;
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color:dark-blue-grey;
  padding:25px`;
const TableRow=styled.div `${tw`flex justify-around`}`;

export {TableContainer,TableHeadings,TableRow}