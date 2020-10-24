import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

// useState with arrays

const HookCounterFour = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,
        {
            id: items.length,
            value: Math.floor(Math.random()*10) + 1
        }])
    }

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#ac96fa'}}>
            <Button variant="warning" onClick={addItem}>Add a number</Button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>  
        </div>
    )
}

export default HookCounterFour
