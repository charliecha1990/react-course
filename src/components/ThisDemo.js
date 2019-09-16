import React from 'react';

export default class ThisDemo extends React.Component {
  
    constructor (props) {
        super(props);
        this.state = {
            message: 'zero'
        }
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
        this.setState({
            message: 'hello'
        })
        console.log(this.state.message)
        console.log(this)
    }

    render() {
        return (
            <div> 
                <button onClick={this.sayHello}>Say Hello</button>  
            </div>
        );
    }
}

