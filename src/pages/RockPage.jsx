import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const RockPage = () => {
    const {rock} = useContext(MyContext)
  return (
    <div>
        <h3>Rock Page</h3>
        <hr />
  
    </div>
  )
}

export default RockPage