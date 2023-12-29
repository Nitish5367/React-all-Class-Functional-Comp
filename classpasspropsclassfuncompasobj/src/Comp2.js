import {Component} from 'react'
class Comp2 extends Component{
    render(){
        let data=this.props.data
        return(
            <div>
                <h1>Name:{data.name}</h1>
                <h1>Name:{data.age}</h1>
                <h1>Name:{data.marks}</h1>
            </div>
        )
    }
}
export default Comp2