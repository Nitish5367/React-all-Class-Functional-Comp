import {Component} from 'react'
class App extends Component{
  constructor(){
    super()
    this.state={"c":0}
  }
  inc=()=>{
    this.setState((prev)=>{return{"c":prev.c+1}})
  }
  dec=()=>{
    this.setState({"c":this.state.c-1})
  }
  render(){
    return(
      <div>
        <h1>{this.state.c}</h1>
        <button onClick={this.dec}>Decrement</button>
        <button onClick={this.inc}>Increment</button>
      </div>
    )
  }
}
export default App
