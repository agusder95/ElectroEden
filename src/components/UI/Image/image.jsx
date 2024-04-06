import React from 'react'
import { ImageWrapper } from './styles'

const Image = ({src, alt, objectFit}) => {
  return (
    <ImageWrapper src={src} alt={alt} $objectfit={objectFit} />
  )

}

Image.defaultProps = {
  objectFit: 'cover'
}

export default Image