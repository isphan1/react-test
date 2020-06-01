import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import CreatPost from './components/CreatPost';

// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import Classclick from './components/Classclick'
// import Functionclick from './components/Functionclick'
// import Parent from './components/Parent'
// import Conditional from './components/Conditional'
// import Namelist from './components/Namelist'
// import Form from './components/Form';
//  import Refs from './components/Refs';
// import Focus from './components/Focus';
// import Portal from './components/Portal';
// import Hero from './components/Hero';
// import ErrorBoundry from './components/ErrorBoundry';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import CounterRender from './components/CounterRender';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import ComponentA from './components/ComponentA';
// import {UserProvider} from './components/userContext'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//             <Greet/>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  render(){

    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
            <Greet name = "kalu" hero = "malu"/>
            <Welcome test = "hell" fest = "kell"/>
            <Message/>
            <Counter value="5"/>
            <Classclick/>
            <Functionclick/> */}
            {/* <Parent child ="kanu"/>
            <Conditional/>
            <Namelist/>
            <Form/> */}
            {/* <Refs/> */}
            {/* <Focus/> */}
            {/* <ErrorBoundry>
            <Hero heroname="kalu"/>
            </ErrorBoundry>
            <ErrorBoundry>
            <Hero heroname="lalu"/>
            </ErrorBoundry>
            <ErrorBoundry>
            <Hero heroname="joker"/>
            </ErrorBoundry> */}

            {/* <ClickCounter /> */}
            {/* <HoverCounter hov="My hover"/> */}
{/* 
            <CounterRender>
            {(count,clickCounter) => (
              <ClickCounter2 count = {count} clickCounter = {clickCounter}/>
            )}
            </CounterRender>

            <CounterRender>
            {(count,clickCounter) => (
              <HoverCounter2 count = {count} clickCounter = {clickCounter}/>
            )}      
            </CounterRender>

              <UserProvider value="All work">
                  <ComponentA/>
              </UserProvider>

            <Portal/> */}

            <CreatPost/>

            <PostList/>

      </header>
    </div>
    )
}

}

export default App;
