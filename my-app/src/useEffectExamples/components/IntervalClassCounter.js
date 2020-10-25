import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="m-3 p-4" style={{backgroundColor:'#000324'}}>
                <h3 style={{color:'#ffffff' , textAlign:'center'}}> Interval Class Counter {this.state.count}</h3>
            </div>
        )
    }
}

export default IntervalClassCounter
