import React, { Component } from 'react';

import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';
import Jsx from './components/Jsx';
import ThisDemo from './components/ThisDemo';
import MaterialUI from './components/MaterialUI';
import Frannie from './components/Frannie' ;
import EventLoop from './Javascript/EventLoop' ;
import ShouldComponentUpdate from './components/ShouldComponentUpdate'
import Hoc from './components/Hoc'
import Decorator from './Javascript/Decorator'
import Closure from './Javascript/Closure'
import ReduxTest from './components/ReduxTest'
import SplitButton from './components/SplitButton'
import SimpleTable from './components/SimpleTable'
import MaterialTableDemo from './components/MaterialTableDemo'
import  LogIn from './components/LogIn'


export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      greetings: 'Hello World'
    }
  }

  getName = () => {  // ES6  =>  arrow function
    return <h1>welcome to react </h1>
  }

  // getName();   

  // getName () {   // ES5 node.js   some mudules-> package Require.js
     
  // }

  time = () => {
    return Date().toString();
  }

  handleSayHello (greetings) {
    alert(greetings)
  }

  handleSubmit (event) {
    console.log(event.target.value)

  }

  render() {

  const welcome = 'welcome to react'

  const FunctionalComponent = props => { // 静态展示型函数组件
    return <h1>无状态组件{props.comment}{props.weather}</h1>
  }   

    return (
      <div>
        <LogIn onSubmit={this.handleSubmit}/>
         {/* <ReduxTest /> */}
         {/* <ShouldComponentUpdate /> */}
         {/* <Decorator />
         <Closure /> */}
         {/* <Hoc /> */}
         {/* <h3>-------------------------------------</h3>
        <FunctionalComponent 
          comment='react真他妈牛逼'
          weather='sunnny'
        />
        <h3>-------------------------------------</h3>
        <h1>{welcome} {this.getName()} {this.time()}</h1>
        <h3>-------------------------------------</h3>
        <LifeCycle />
        <h3>-------------------------------------</h3> */}
        {/* <SetState /> */}
        {/* <MaterialUI /> */}
        {/* <ThisDemo /> */}
        {/* <Frannie data='Frannie'></Frannie>
        <SplitButton />
        <SimpleTable />
        <MaterialTableDemo /> */}
        {/* <h3>-------------------------------------</h3>
        <Jsx 
          shouldDisplay={true}
          data='hands boy'
        />
        <h3>-------------------------------------</h3> */}
        {/* <EventLoop /> */}
      </div>
    );
  }
}


