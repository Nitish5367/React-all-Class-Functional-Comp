import {Component} from 'react'
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"

class App extends Component{
  constructor(){
    super()
    this.data={"name":"abc","age":20,"marks":90}
  }
  render(){
    return(
      <div>
        <Comp1 data={this.data}/>
        <Comp2 data={this.data}/>
      </div>
    )
  }
}
export default App