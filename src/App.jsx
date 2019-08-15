import React, { Component } from 'react';


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
       <h1>{welcome} {this.getName()} {this.time()}</h1>
    );
  }
}

export default App;

