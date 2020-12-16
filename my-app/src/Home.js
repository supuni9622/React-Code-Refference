import React from 'react'
import Navigation from './Naviagtion'
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './useStateExamples/counter/Counter';
import Index from './useEffectExamples/Index';
import Index2 from './useEffectExamples/Index2';
import IndexContext from './useContextExamples/Index';
import IndexReducer from './useReducerExamples/Index';
import IndexCallback from './useCallbackExamples/IndexCallback';
import IndexMemo from './useMemoExamples/IndexMemo';
import IndexRef from './useRefExamples/IndexRef';
import CustomIndex from './customHooksExamples/CustomIndex';
import JSTesting from './jsTesting/JSTesting';

const Home = () => {
    return (
        <>
            <Navigation/>
            <div className="container-fluid" style={{marginTop:'100px'}}>
                <Switch>
                    <Route name="welcome" exact path="/" component={Welcome} />
                    <Route name="useState" exact path="/useState" component={Counter} />
                    <Route name="useEffect" exact path="/useEffect" component={Index} />
                    <Route name="useEffectDataFetch" exact path="/useEffect/datafetch" component={Index2} />
                    <Route name="useContext" exact path="/useContext" component={IndexContext} />
                    <Route name="useReducer" exact path="/useReducer" component={IndexReducer} />
                    <Route name="useCallback" exact path="/useCallback" component={IndexCallback} />
                    <Route name="useMemo" exact path="/useMemo" component={IndexMemo} />
                    <Route name="useRef" exact path="/useRef" component={IndexRef} />
                    <Route name="customHooks" exact path="/customHooks" component={CustomIndex} />
                    <Route name="jsTesting" exact path="/testing" component={JSTesting} />
                </Switch>
            </div>
           
        </>
    )
}

export default Home
