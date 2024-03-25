import React from 'react'
import { ContentWrapper } from './styles'

const content = ({children}) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default content