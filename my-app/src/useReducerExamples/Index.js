import React from 'react'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import GlobaleIndex from './components/globalState/GlobaleIndex'
import DataFetchingIndex from './components/dataFetching/DataFetchingIndex'

/*
    * useReducer is a hook that is used for state management
    * It's an alternative to useState
    * useReducer is a most primitive hook compaired to useState. useState is built using useReducer
    *
    * Reduce method in vanila java script takes 2 parameters - reducer function & initial value
    * reducer() returns a single value 
    * useReducer() also accepts 2 parameters - currentState, action
    * useReducer() returns a newState
    * useReducer() hook returns pair of values - [newState, dispatch]
    * dispatch method is basically used to specify the action
    * 
    * ===========================================
    * 
    * useReducer(reducer, initialState)
    * reducer(currentState, action)
    * 
    * CounterOne, CounterTwo & CounterThree shows the local state management
    * CounterFour shows share state between components which is called Global state manangement  ==> useReducer + useContext
*/


// Let's check reduce() method
const numbers = [1,2,3,4,5,6]
const reducer = (accumilator, initialValue) => accumilator + initialValue
const sum = numbers.reduce(reducer, 4)
console.log("Testing reduce() in vanila javaScript :" + sum)
// Answer ==> 25 == 4 + 1 + 2 + 3 + 4 + 5 + 6

const IndexReducer = () => {
    return (
        <div className="continer">
            <CounterOne/>
            <CounterTwo/>
            <CounterThree/>
            <GlobaleIndex/>
            <DataFetchingIndex/>
        </div>
    )
}

export default IndexReducer
