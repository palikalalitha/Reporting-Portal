import styled from '@emotion/styled'
import tw from 'tailwind.macro'

interface ImageElementProps
{
   type?:string

}
const ImageElement = styled.img<ImageElementProps>`${tw``}
   width: ${props => (props.type === 'logo' ? '90px' : '35px')};
   height: ${props => (props.type === 'logo' ? '90px' : '35px')};
   object-fit: contain;
   outline: none;
`
export { ImageElement }
