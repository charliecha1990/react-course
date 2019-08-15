import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';


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
        {/* <h1>{welcome} {this.getName()} {this.time()}</h1> */}
        <LifeCycle />
        <SetState />
      </div>
    );
  }
}

export default App;

