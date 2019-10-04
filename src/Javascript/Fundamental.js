import React , { Component }from 'react';
import { Button } from '@material-ui/core';
import { display } from '@material-ui/system';
import Chip from '@material-ui/core/Chip';

class Fundamental extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weekDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            display: false,
            numbers: [5,4,3,2,1],
            emptyArray: []
         }
         this.pushArray = this.pushArray.bind(this)
    }



pushArray (){
    this.state.numbers.forEach(element => {
        this.state.emptyArray.push(element-1)
    });
    console.log(this.state.emptyArray)
}
    


    render() { 
        return ( 
            <div>
                {this.state.display &&
                 this.state.weekDay.map(element =>
                <Chip
                   label ={element}    
                 />)}
                 <button onClick={() => this.setState({display: !this.state.display})}>Click me</button>
                 <button onClick={this.pushArray}>show me</button>
            </div>
         );
    }
}
 
export default Fundamental;