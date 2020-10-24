import React, {useState} from 'react'

const HookCounterThree = () => {

    //state can be a string, number, object, boolean or array
    const [name, setName] = useState(
        {
            firstName: '',
            lastName: ''
        }
    )

    const [name1, setName1] = useState(
        {
            firstName: '',
            lastName: ''
        }
    )

    return (
        <div className="m-3 p-4" style={{backgroundColor:'#abfff9'}}>
            <div className="m-3 p-4" style={{backgroundColor:'#defa61'}}>
                <form>
                    <input 
                        type="text"
                        value={name.firstName}
                        onChange={e => setName({firstName: e.target.value})}
                    />
                    <input 
                        type="text"
                        value={name.lastName}
                        onChange={e => setName({lastName: e.target.value})}
                    />
                </form>
                <h6>Your first name is : {name.firstName} </h6>
                <h6>Your last name is : {name.lastName} </h6>

                <h5>To display the process</h5>
                <h6>{JSON.stringify(name)}</h6>
            </div>
            
            {/* useState does not automaticaly merge and update object. So when we see firstName, lastName is removed 
                This is a key difference between setState in class component and useSate 
                setState do it automaticaly but here we have to do it mannualy */}

            {/* We can use spread operator for manual merge */}

            <h4 className="m-3 p-4">See the difference.....</h4>

            <div className="m-3 p-4" style={{backgroundColor:'#defa61'}}>
                <h5>useState with spread operator to merge state</h5>
                <form>
                    <input 
                        type="text"
                        value={name1.firstName}
                        onChange={e => setName1({...name1, firstName: e.target.value})}
                    />
                    <input 
                        type="text"
                        value={name1.lastName}
                        onChange={e => setName1({...name1, lastName: e.target.value})}
                    />
                </form>

                {/* Spread operator tell -- copy every property in the object and just override the field with different value*/}

                <h6>Your first name is : {name1.firstName} </h6>
                <h6>Your last name is : {name1.lastName} </h6>
                <h5>To display the process</h5>
                <h6>{JSON.stringify(name1)}</h6>
            </div>
            
        </div>
    )
}

export default HookCounterThree
