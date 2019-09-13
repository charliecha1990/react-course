import React, { Component } from 'react'

class Example extends Component {

   constructor(props) {
       super(props);
       this.state = {
           number: 1,
           date: ''
       }
       console.log('1.------constructor started------')     
   }

    componentWillMount () {    
       console.log('2.------ componentWillMount started------');
    }

    componentDidMount () {
       // we can update the view since the component has already been rendered
       console.log('3.------ componentDidMount started------');
       this.setState(preState => ({
               number: preState.number+1,
               date: preState.date
        }))
    }

    componentWillReceiveProps () {
       // the props of parent component will have changed
       console.log('4.------ componentWillReceiveProps started------');
    }

    shouldComponentUpdate () {
       // here is the point where we can optimize
        console.log('5.------ shouldComponentUpdate started------');
        return ;
    }

    componentWillUpdate () {
        console.log('6.------ componentWillUpdate started------');
    }

    componentDidUpdate () {
        console.log('7.------ componentDidUpdate started------');
    }

    


    render() {

        console.log('the component has been rendered')
        return (
            <div>
                <h3>Let us discover the LifeCycle of React component</h3>
                <h1>{this.state.number}</h1>
                {console.log(this.state.number)}
                <h1>{this.props.time}</h1>
                <h3>Let us discover the LifeCycle of React component</h3>
            </div>
        )
    }
}


export default class LifeCycle extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
           time: '2000'
        }

        setTimeout(() => {
            this.setState({
                time: '2019'
            })
        
        }, 5000);  

    }

    render() {
        return (
            <Example time={this.state.time} />
        )
    }
}