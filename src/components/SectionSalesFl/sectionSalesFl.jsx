import React from 'react'
import { SectionSalesFlWrapper } from './styles'
import Title from '../UI/Title/title'
import ProductsCarousell from '../UI/ProductsCarousell/ProdCarousell'

const SectionSalesFlash = () => {
  return (
    <SectionSalesFlWrapper>
      <Title sectionName="Today's" title={"Flash Sales"} />
      <ProductsCarousell />
    </SectionSalesFlWrapper>
  )
}

export default SectionSalesFlash
