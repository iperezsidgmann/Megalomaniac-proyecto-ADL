import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const PopPage = () => {
    const {pop} = useContext(MyContext)
  return (
    <div>
        <h3>Pop Page</h3>
        <hr />
  
    </div>
  )
}

export default PopPage