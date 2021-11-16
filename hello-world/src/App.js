import logo from './logo.svg';
import './App.css';

import { Route,Switch } from 'react-router-dom';
import Router from './Router/Router';
import RouterDemo from './Router/RouterDemo';

import Menu from './Menu';
import ConceptParams from './Router/ConceptParams';
import DataFetching from './useEffect/DataFetching';
import UseReducer from './Hooks/UseReducer';
import UseReducerwithObj from './Hooks/UseReducerwithObj';
import MultiUseReducer from './Hooks/MultiUseReducer';
import ComponentA from './Hooks/ComponentA.js';
import ComponentB from './Hooks/ComponentB';
import ComponentC from './Hooks/ComponentC';
import React, { useReducer } from 'react';
import UseRefs from './Refs/UseRefs';

// export const CountContext = React.createContext()

const initialState = 0

//state is newmeric val and action is a string rather than an obj with a type property
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return state = 0
        default:
            return state
    }

}

function App() {
  //dispatch action from the nested component insted of app component
  
  const[count,dispatch] = useReducer(reducer,initialState)

  return (
    // <CountContext.provider  
    //   vlaue={{countState: count,countDispatch: dispatch}}
    // >
      <div className="App">
      Count - {count}

      <UseRefs />

      <UseReducer />
      <UseReducerwithObj />
      <MultiUseReducer />
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      

      <DataFetching />

      <Menu />

      <Switch>

        <Route exact path='/'component={Router} />
        <Route exact path='/Router' render={() =><RouterDemo /> } />

        {/*render use when you required to pass props and render will update the changes and shows but
          component create new face at every time when you hit it */}

          <Route path='/User/:id/:Prince' render={() => <ConceptParams />}/>

      </Switch>

      <Router />
      <RouterDemo />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ReactJs
        </p>
      </header>
      
    </div>
   // </CountContext.provider> 
  );
}

export default App;

