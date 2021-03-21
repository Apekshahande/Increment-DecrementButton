import React, { Component } from 'react'

class Increment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    increment(){
        // this.state.count = this.state.count+1
        // // it will increment but it will not rander on web browser. because of of that we are using setState.
        // console.log(this.state.count)


        

        this.setState((prevState)=>({
            count:prevState.count + 1
        }))
        // console.log(this.state.count)

    }  
    decrement(){
        // this.state.count = this.state.count-1
        // // it will increment but it will not rander on web browser. because of of that we are using setState.
        // console.log(this.state.count)

        this.setState((prevCount)=>({
            count:prevCount.count -1
        }))
    }
   
    render() {
        // console.log(this.state.count)
        return (
            <div>
                <div>Count :- {this.state.count}</div>
                <button onClick={()=>this.increment()}>increment 👍</button>
                <button onClick={()=>this.decrement()}>decrement 👎 </button>
            </div>
        )
    }
}

export default Increment
