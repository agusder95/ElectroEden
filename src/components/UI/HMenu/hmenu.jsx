import React, { useState } from 'react'
import { Bar, HMenuWrapper, ToggleButton, MenuContent } from './styles'

const Hmenu = ({children}) => {
  const [stateMenu, setStateMenu] = useState(false)
     return (
    <HMenuWrapper >
          <ToggleButton onClick={() => setStateMenu(!stateMenu)}>
               <Bar $menuopen={stateMenu}/>
               <Bar $menuopen={stateMenu}/>
               <Bar $menuopen={stateMenu}/>
          </ToggleButton>
          <MenuContent $menuopen={stateMenu} className="dataContent" >{children}</MenuContent>
    </HMenuWrapper>
  )
}

export default Hmenu