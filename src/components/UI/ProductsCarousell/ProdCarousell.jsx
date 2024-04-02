import React from 'react'

const ProductsCarousell = ({products}) => {
  const arrayProducts = products
     return (
    <div>
          <div>
               {
                    arrayProducts.map((product, index) => (
                         <p key={index}>{product}</p>
                    ))
               }
          </div>
          <div>
               <button >View All Products</button>
          </div>
    </div>
  )
}

export default ProductsCarousell