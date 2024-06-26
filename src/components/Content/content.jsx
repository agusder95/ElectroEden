import React from 'react'
import { ContentWrapper } from './styles'

const Content = ({children}) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default Content