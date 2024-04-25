import React from 'react'
import { H3ProductName, ProducCardP, ProductCardImg, ProductCardWrapper, ProducCardDisc } from './styles'
import Image from '../Image/image'

const CardProduct = ({img, name, price, discoutn}) => {
     const offert = (discoutn / price) * 100;
     const newPrice = price - discoutn
     return (
    <ProductCardWrapper>
          {offert != 0? <ProducCardDisc>-{discoutn}%</ProducCardDisc> : null}
          <ProductCardImg>
               <Image src={img} alt={name} objectFit={"contain"}/>
          </ProductCardImg>
          <H3ProductName>{name}</H3ProductName>
          <ProducCardP>${newPrice} {offert != 0? <s>${price}</s> : null}</ProducCardP>
    </ProductCardWrapper>
  )
}

export default CardProduct