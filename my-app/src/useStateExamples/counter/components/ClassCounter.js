import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

// 3 Steps are neccessary to create this counter

/*
    1. Create a component - class component or functional component
    2. Create a state variable (count) and initialize to 0
    3. Create a method (incrementCount) that is capable of setting state value

*/

class ClassCounter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <Button variant="info" onClick={this.incrementCount}> Count {this.state.count} </Button>
            </div>
        )
    }
}

export default ClassCounter
