import React ,{useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';
// import HookCounterOne from './components/HookCounterOne';
// import ClassCounter from './components/ClassCounter';
// import ClassMouse from './components/ClassMouse';
// import HockMouse from './components/HockMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalCounter from './components/IntervalCounter';
// import IntervelHook from './components/IntervalHook';
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';
import CounterReducer from './components/CounterReducer';
import DataFatchingOne from './components/DataFatchingOne';
import DataFatchingTwo from './components/DataFatchingTwo';
import RefInput from './components/RefInput';
import CustomeHook from './components/CustomeHook';
import CustomFormHook from './components/CustomFormHook';

// import FormHook from './components/FormHook';
// import HookCounter from './components/HookCounter';

export const userContext = React.createContext()
export const channelContext = React.createContext()
export const countContext = React.createContext()


const intialState = {
  firstCounter: 0,
  secondCounter:10
}
const reduce = (state,action) =>{
  switch (action.type) {
      case 'increment':
          return {...state,firstCounter: state.firstCounter + 1}

      case 'decrement':
          return {...state,secondCounter: state.secondCounter - 1}

      case 'reset':
          return intialState       
      default:
          return state.CounterReducer
  }
}

function App() {

  const [count,dispatch] = useReducer(reduce,intialState)

  return (
    <div className="App">
      <header className="App-header">
        {/* <HookCounter/> */}
        {/* <FormHook/> */}
        {/* <ClassCounter/>
        <HookCounterOne/> */}
        {/* <ClassMouse/> */}
        {/* <HockMouse/> */}
        {/* <MouseContainer/> */}
        {/* <IntervalCounter/>
        <IntervelHook/> */}
        {/* <DataFetching/>
        <userContext.Provider value="kanu">
          <channelContext.Provider value="bulu">
              <ComponentA/>
          </channelContext.Provider>
        </userContext.Provider> */}

      {/* <CounterReducer/>

      <countContext.Provider value={{count:count,dispatch:dispatch}}>
      <ComponentA/>
      </countContext.Provider> */}
      {/* <DataFatchingOne/> */}
      <DataFatchingTwo/>
      <RefInput/>
      <CustomeHook/>
      <CustomFormHook/>
      </header>
    </div>
  );
}

export default App;
