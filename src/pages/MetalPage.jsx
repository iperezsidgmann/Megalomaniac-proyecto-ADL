import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const MetalPage = () => {
    const {metal} = useContext(MyContext)
  return (
    <div>
        <h3>Metal Page</h3>
        <hr />
  
    </div>
  )
}

export default MetalPage