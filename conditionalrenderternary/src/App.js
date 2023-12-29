import React from 'react'
import {useState} from 'react'
const App = () => {
  let [f,setF]=useState(true)
  return (
    <div>
      {(f)?<button onClick={()=>setF(false)}>Logout</button>:<button onClick={()=>setF(true)}>Login</button>}
    </div>
  )
}

export default App