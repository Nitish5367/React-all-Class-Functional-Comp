import {useState,useRef} from 'react'
import React from 'react'

const App = () => {
  let [data,setData]=useState("")
  let t1=useRef()
  let fun=()=>{
    setData(t1.current.value)
    t1.current.value=""
  }
  return (
    <div>
      <input type='text' ref={t1}/><button onClick={fun}>Getdata</button>
      <div>{data}</div>
    </div>
  )
}

export default App