import React, { Component } from 'react';


class App extends Component {

  getName = () => {

    return <h1>welcome to react </h1>

  }


  render() {

  const welcome = 'welcome to react'

    return (
       <h1>{welcome} {this.getName()}</h1>
    );
  }
}

export default App;
