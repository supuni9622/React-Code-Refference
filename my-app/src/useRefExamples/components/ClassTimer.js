import React, { Component } from 'react'

class ClassTimer extends Component {

    interval 
    constructor(props) {
        super(props)
    
        this.state = {
             timer : 0
        }
    }

    componentDidMount() {
        this.interval = setInterval (()=> {
            this.setState(prevState => (({timer: prevState.timer + 1})))
        }, 1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className='m-3 p-3' style={{backgroundColor:'#c7ffed'}}>
                <h3>Class Timer - {this.state.timer} </h3>
                <button onClick={()=>clearInterval(this.interval)}> Clear Interval</button>
            </div>
        )
    }
}

export default ClassTimer
