import {Component} from 'react'
class App extends Component{
  constructor(){
    super()
    this.state={"c1":0,"c2":0,"c3":0}
  }
  inc1=()=>{
    this.setState((prev)=>{
      return({...prev,"c1":prev.c1+1})
    })
  }
  inc2=()=>{
    this.setState({...this.state,"c2":this.state.c2+1})
  }
  inc3=()=>{
    this.setState({...this.state,"c3":this.state.c3+1})
  }
  render(){
    return(
      <div>
        <h1>{this.state.c1}</h1>
        <button onClick={this.inc1}>Increment c1</button>
        <h1>{this.state.c2}</h1>
        <button onClick={this.inc2}>Increment c2</button>
        <h1>{this.state.c3}</h1>
        <button onClick={this.inc3}>Increment c3</button>

      </div>
    )
  }
}
export default App