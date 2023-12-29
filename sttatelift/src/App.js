import Inc from './Inc'
import Dec from'./Dec'
import React from 'react'
import {useState} from 'react'
const App = () => {
  let [c,setC]=useState(0)
  let incr=()=>setC(c+1)
  let decr=()=>setC(c-1)
  return (
    <div>
 <h1>{c}</h1>
 <Inc fun={incr}/>
 <Dec fun={decr}/>

    </div>
  )
}

export default App