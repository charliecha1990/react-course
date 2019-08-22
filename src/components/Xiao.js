import React, {Component } from 'react'

class Xiao extends Component {//有状态

    constructor(props) {
        super(props); 
        this.state = {
           number: 1,
           date: '2019-8'
        }
    }
    
    render(){
        return(
            <div>
                 {this.state.date} {/*STATE FROM  SELF*/ }
                 {this.props.test} {/* PROPS FROM PARENTS*/ }
                 <h1>Although you are so beautiful</h1>
             </div>
        )
        
    }
}   

export default Xiao;