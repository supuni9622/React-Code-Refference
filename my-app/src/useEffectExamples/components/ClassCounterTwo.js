import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

// Re-rendering after every executions causes performance problems
// So have to conditionaly render

class ClassCounterTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {

        // Conditionaly update only when the count value changes
        if(prevState.count !== this.state.count){
            console.log("Updating class component with fixed conditionaly rendering")
            document.title = `Clicked ${this.state.count} times`
        }
       
    }
        
    render() {
        return (
            <div className="m-3 p-4" style={{backgroundColor:'#ffc4ab'}}>

                <h6 className='m-3'>Side efects in class component</h6>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={e => {this.setState({name: e.target.value})}}
                />

                <Button variant='danger' onClick={() => this.setState({count: this.state.count + 1})}>
                    Click {this.state.count} times
                </Button>
            </div>
        )
    }
}

export default ClassCounterTwo