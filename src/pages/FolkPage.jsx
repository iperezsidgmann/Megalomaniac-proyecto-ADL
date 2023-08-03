import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const FolkPage = () => {
    const {folk} = useContext(MyContext)
  return (
    <div>
        <h3>Folk Page</h3>
        <hr />
  
    </div>
  )
}

export default FolkPage