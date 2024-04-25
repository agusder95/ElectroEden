import React from 'react'
import { SectionBestWrapper } from './styles'
import Title from '../UI/Title/title'
import ProductsCarousell from '../UI/ProductsCarousell/ProdCarousell'

const SectionBest = () => {
  return (
    <SectionBestWrapper>
      <Title sectionName="This Month" title={"Best Selling"}/>
      <ProductsCarousell />
    </SectionBestWrapper>
  )
}

export default SectionBest