import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div className="m-3 p-4" style={{backgroundColor:'#4dff6d'}}>

                <h5> Mouse Coordination with class component</h5>
                <h6>X - {this.state.x}  Y - {this.state.y} </h6>
            </div>
        )
    }
}

export default ClassMouse
