import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const InputTypeRadioButton = styled.input`
   ${tw`mr-4`}
   width: 16px;
   height: 16px;
   object-fit: contain;
`
const Label = styled.label`
   ${tw`mr-2`}
   width: 47px;
   height: 24px;
   font-family: Rubik;
   font-size: 12px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 2;
   letter-spacing: 0.12px;
   color: #171f46;
`
export { InputTypeRadioButton, Label }
