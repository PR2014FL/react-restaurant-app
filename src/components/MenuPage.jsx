import React from 'react'
import MenuTable from './MenuTable'


function MenuPage({menuItems, setMenuItem}) {

    // const styleMenu = {
    //     border: '2px solid #ffa500',
    //     padding: '0 5px 5px 5px',
    //     marginRight: '2.5px',
    //     backgroundColor: '#ffa50030'
    // }
  return (
    <MenuTable menuItems={menuItems} setter={setMenuItem}/>
  )
}

export default MenuPage