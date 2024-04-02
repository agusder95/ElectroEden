import React from 'react'
import { SectionSalesTitle, SectionSalesWrapper } from './styles'

const SectionSales = ({title, timer, products}) => {
     const array = products
     return (
    <SectionSalesWrapper>
          <SectionSalesTitle>
               <p>{title}</p>
               <p>{timer}</p>
          </SectionSalesTitle>
          <carouselProducts products={array}/>

     </SectionSalesWrapper>
  )
}

SectionSales.defaultProps = {
     timer: none,
     products: []
}

export default SectionSales