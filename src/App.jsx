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
import LogIn from './components/LogIn'
import DemoContext from './components/DemoContext'
import Fundmental from './Javascript/Fundmental'
import Hooks from './components/Hooks'
import ImmediatelyInvokedFunctionExpression from './Javascript/ImmediatelyInvokedFunctionExpression'
import SigninExample2 from './components/SigninExample2'
import axios from 'axios';

export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      response:'',
      seasons:['spring','summer','fall','winter'],
      numbers:[1,2,3,4,5,6]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    // event.preventDefault();
    let userName = this.state.userName;
    let password = this.state.password;

    this.authenticate(userName,password);
    // console.log('Credentials have been submitted')
    // console.log(email,password)
  }

  authenticate(userName,password){
    axios.post('/api/user',{
      userName,
      password
    })
    .then(function (response) {
      console.log('request',response)
      if(response.data == 'success') {
          setTimeout(() => {
            alert(`Your login has been successful with email:${userName}, password:${password}`)
        }, 3000);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
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

  createNewArray() {
    let newArray = [];

    this.state.numbers.forEach(e =>{
      newArray.push(e+1)
    })

    this.setState({numbers: newArray})
  }

  componentDidMount() {
    axios.get('/api/user')
    .then(function (response) {
      this.setState({response: response},()=> {
        console.log(this.state.response)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {

  const welcome = 'welcome to react'

  const FunctionalComponent = props => { // 静态展示型函数组件
    return <h1>无状态组件{props.comment}{props.weather}</h1>
  }   

    return (
      <div>
<<<<<<< HEAD
=======
        {/* <ImmediatelyInvokedFunctionExpression /> */}
        <SigninExample2 
          onSubmit={this.handleSubmit}
          userName={this.state.userName}
          password={this.state.password}
          onChange={this.handleChange}
          response={this.state.response}
        />
        {/* {this.state.seasons.map(season => <div key={season}>{season+'2019'}</div>)}

        {console.log(this.state.seasons)}
        {this.state.seasons.filter(season => { return season!=='spring' } )} */}
        {/* {this.state.numbers.forEach(number => this.state.numbers.push(number)) } */}
        {/* {console.log(this.state.numbers)} */}
        {/* ForEach针对逻辑层*/}
    

        {/* 内部成员属性值不改变*/}

        {/* <Hooks /> */}
        {/* <Fundmental /> */}
        {/* <DemoContext /> */}
>>>>>>> cef04e76ce538bd897dc503c07a27c25820d257d
        {/* <LogIn 
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        /> */}
<<<<<<< HEAD
         <ReduxTest />
=======
         {/* <ReduxTest /> */}
>>>>>>> cef04e76ce538bd897dc503c07a27c25820d257d
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


