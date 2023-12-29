import React from 'react'
import Gc from './Gc'
const Cart = ()=>{
  let props=useContext(Gc)
  return (<>
  {props.data.length==0&&<div style={{"color":"red"}}>Your cart was empty</div>}
  {props.data.length>0 && <div>
    <div className='Products'>
    {
        props.data.map((item,index)=>{
            return(
                <div className='card'>
                    <div className='pimg'><img src={item.images[0]}/></div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h2>{item.price}</h2>
                    <div><button onClick={()=>props.decqty(index)}>-</button>{item.qty}<button onClick={()=>props.incqty(index)}>+</button></div>
                    <h2>Total:{item.total}</h2>
                    <button onClick={()=>props.del(index)}>delete from Cart</button>
                </div>
            
            )
        })
    }
    </div>
    <h1>CartTotal:{props.ctotal}</h1>
  </div>
   
   }
  
  
  
  </>
    
  )
}

export default Cart