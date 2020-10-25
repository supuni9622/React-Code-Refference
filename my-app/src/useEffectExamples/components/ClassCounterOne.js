import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class ClassCounterOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        //Those `` are called template literals
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("Updating class component but not fixed conditionaly rendering")
        document.title = `Clicked ${this.state.count} times`
    }
        
    render() {
        return (
            <div className="m-3 p-4" style={{backgroundColor:'#deff85'}}>

                <h6 className='m-3'>Side efects in class component</h6>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={e => {this.setState({name: e.target.value})}}
                />
                <Button variant='info' onClick={() => this.setState({count: this.state.count + 1})}>
                    Click {this.state.count} times
                </Button>
            </div>
        )
    }
}

export default ClassCounterOne
