import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';
import Jsx from './components/Jsx';


class App extends Component {

  getName = () => {

    return <h1>welcome to react </h1>

  }

  time = () => {
    return Date().toString();
  }


  render() {

  const welcome = 'welcome to react'

    return (
      <div>
        <h3>-------------------------------------</h3>
        <h1>{welcome} {this.getName()} {this.time()}</h1>
        <h3>-------------------------------------</h3>
        <LifeCycle />
        <h3>-------------------------------------</h3>
        <SetState />
        <h3>-------------------------------------</h3>
        <Jsx 
          shouldDisplay={true}
          data='hands boy'
        />
        <h3>-------------------------------------</h3>
      </div>
    );
  }
}

export default App;

