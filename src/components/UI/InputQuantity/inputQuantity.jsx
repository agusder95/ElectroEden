import React, { useState } from 'react'
import { InputQ, InputQBtn, InputQuantityWrapper } from './styles'

const InputQuantity = ({width , height, max}) => {

     const [value, setValue] = useState(1)

     const add = () => {
          if(value < max){
            setValue(value+1)
          }
     }

     const sub = () => {
         if(value > 1){
             setValue(value-1)
         }
     }

  return (
    <InputQuantityWrapper width={width} height={height}>
     <InputQBtn width={width} onClick={sub} ><p>-</p></InputQBtn>
     <InputQ>
          <p>{max > 0 ? value : 0}</p>
     </InputQ>
     {/* <InputQ type='number' min={1} value={1}/> */}
     <InputQBtn width={width} onClick={add} ><p>+</p></InputQBtn>
    </InputQuantityWrapper>
  )
}

InputQuantity.defaultProps = {
  width: '100%',
  height: '2rem'
}

export default InputQuantity