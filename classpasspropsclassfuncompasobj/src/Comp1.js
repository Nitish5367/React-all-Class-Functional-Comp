import {Component} from 'react'
class Comp1 extends Component{
    render(){
        return(
            <div>
                <h1>Name:{this.props.data.name}</h1>
                <h1>Name:{this.props.data.age}</h1>
                <h1>Name:{this.props.data.marks}</h1>
            </div>
        )
    }
}
export default Comp1