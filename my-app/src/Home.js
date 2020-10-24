import React from 'react'
import Navigation from './Naviagtion'
import { Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navigation/>
            <div>
                <Switch>
                    <Route name="useState" exact path="/useState" component={"Hi"} />
                    <Route name="useEffect" exact path="/useEffect" component={"Hi"} />
                    <Route name="useContext" exact path="/useContext" component={"Hi"} />
                    <Route name="useReducer" path="/useReducer" component={"Hi"} />
                    <Route name="useMemo" exact path="/useMemo" component={"Hi"} />
                    <Route name="useRef" exact path="/useRef" component={"Hi"} />
                    <Route name="useCallback" exact path="/useCallback" component={"Hi"} />
                    <Route name="customHooks" exact path="/customHooks" component={"Hi"} />
                </Switch>
            </div>
           
        </>
    )
}

export default Home
