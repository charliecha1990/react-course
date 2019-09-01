import React, { Component } from 'react';

const Context = React.createContext();

const store = {
    date: '2019',
    logError () {
        console.log('Errors')
    }
}

const withConsumer = Comp => props => (
    <Context.Provider value={store}>
        <Context.Consumer>
          {value => <Comp value={value} {...props}/>}   
        </Context.Consumer>
    </Context.Provider>
)


// @Consumer
class Inner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.value.date}
            </div>
        );
    }
} 

@withConsumer
class Decorator extends React.Component {
    render() {
        return (
            <div>
               <Inner {...this.props}/>
            </div>
        );
    }
}

export default Decorator;

/*
1. yarn add --dev customize-cra react-app-rewired @babel/plugin-proposal-decorators

2.
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",

3.
config-overrides.js file in your project root.
This is where we’ll define our modifications. For now, add the following:
const { override, addDecoratorsLegacy } = require('customize-cra')

// Adds legacy decorator support to the Webpack configuration.
module.exports = override(addDecoratorsLegacy())

4. fix the cannot find module bug
npm install react-scripts@2.1.1 --save

*/