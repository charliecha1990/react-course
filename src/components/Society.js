import React from 'react'

// 1. FUNCTION COMPONENT


export function Application1 (props) {
    return (
        <div>
            <h3>
            {props.name}
            </h3>
        </div>
    )
}


// 2. CLASS COMPONENT

export default class Society extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           name: 'Mengyi',
           age: 18
        }

        this.changeName = this.changeName.bind(this);
    }


    componentDidMount () {
        setTimeout(()=> this.setState({
            name: 'value'
         }),3000)
    }

    changeName (value) {
        setTimeout(this.setState({
            name: value
        }),3000)
    }

    
    showName () {
        console.log('my name is charlie')
    }


    render () {
        return (
            // <React.Fragment> {/* empty div */}
            <div>
                {/* {this.showName()} */}
                <h3>Hello world:{this.state.name}</h3>
                <button onClick={()=> this.changeName('Tom')}>Click me to chaneg the name</button>
                <Family age={this.state.age}/>
                <Application1 name={this.state.name}/>
            </div>       
            // </React.Fragment>
        )
    }
}


//  组件的本质就是一个带返回值的函数

class Family extends React.Component {
    render(){
        return (
            <div>
               <h3>{this.props.age}</h3> 
            </div>
        )
    }
}