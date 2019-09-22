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
import LogIn1 from './components/LogIn1'
import RouterXiao from './components/RouterXiao'



export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      number: '',
      date: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }

  // getName = () => {  // ES6  =>  arrow function
  //   return <h1>welcome to react </h1>
  // }

  // getName();   

  // getName () {   // ES5 node.js   some mudules-> package Require.js
     
  // }

  // time = () => {
  //   return Date().toString();
  // }

  // handleSayHello (greetings) {
  //   alert(greetings)
  // }

  componentDidMount() {

  }

  handleClick() {
    // event.preventDefault();
    const email = this.state.email;
    const date= this.state.date;
    const name = this.state.name;
    const number = this.state.number;

    this.authenticate(email,date,name,number)
    // console.log('Credentials have been submitted')
    // console.log(email,date,name,number)
  }

  authenticate(email,date,name,number){
    setTimeout(() => {
      alert(`Your login has been successful with 
      name:${name}
      number:${number}, 
      date${date},
      email:${email}`
      )
    }, 3000);
  }
 
  // handleSubmit = () => {  // Arrow functions bind this
  //   // event.preventDefault();
  //   const email = this.state.email;
  //   const password = this.state.password;

  //   console.log('Credentials have been submitted')
  //   console.log(email,password)
  // }

  handleChange(type, event) {
    this.setState({
      [type]: event.target.value
    })

    // console.log(type)
    // console.log(event)
  }

  render() {

  const welcome = 'welcome to react'

  const FunctionalComponent = props => { // 静态展示型函数组件
    return <h1>无状态组件{props.comment}{props.weather}</h1>
  }   

    return (
      <div>
      <RouterXiao />
      {/* <LogIn1 
        name={this.state.name}
        number={this.state.number}
        date={this.state.date}
        email={this.state.email}
        onClick={this.handleClick}
        onChange={this.handleChange}
      /> */}
{/* 
        <LogIn 
          email={this.state.email}
          password={this.state.password}
          name={this.state.name}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        /> */}
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


