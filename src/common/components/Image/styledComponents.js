import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const ImageElement = styled.img`
   width: ${props => (props.type === 'logo' ? '90px' : '48px')};
   height: ${props => (props.type === 'logo' ? '90px' : '48px')};
   object-fit: contain;
   outline: none;
`
export { ImageElement }
